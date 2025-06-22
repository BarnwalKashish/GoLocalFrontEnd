import * as React from "react";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Service } from "../types/Service";

export interface FilterState {
  search: string;
  location: string;
  category: string;
  priceRange: string;
  rating: string;
  availability: string;
  distance: string;
  sortBy: string;
}

interface FilterContextType {
  filters: FilterState;
  updateFilter: (key: keyof FilterState, value: string) => void;
  resetFilters: () => void;
  applyFilters: (services: Service[]) => Service[];
}

const defaultFilters: FilterState = {
  search: "",
  location: "",
  category: "",
  priceRange: "",
  rating: "",
  availability: "",
  distance: "",
  sortBy: "rating",
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const updateFilter = useCallback((key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const applyFilters = useCallback(
    (services: Service[]): Service[] => {
      let filteredServices = [...services];

      // Search
      if (filters.search) {
        filteredServices = filteredServices.filter(
          (service) =>
            service.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            service.category.toLowerCase().includes(filters.search.toLowerCase()) ||
            service.description?.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      // Location
      if (filters.location) {
        filteredServices = filteredServices.filter((service) =>
          service.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }

      // Category
      if (filters.category && filters.category !== "All Services") {
        filteredServices = filteredServices.filter(
          (service) => service.category.toLowerCase() === filters.category.toLowerCase()
        );
      }

      // Price Range
      if (filters.priceRange) {
        filteredServices = filteredServices.filter((service) => {
          const price = parseInt(service.price.replace(/[^\d]/g, ""));
          switch (filters.priceRange) {
            case "Under ₹500":
              return price < 500;
            case "₹500 - ₹800":
              return price >= 500 && price <= 800;
            case "Over ₹800":
              return price > 800;
            default:
              return true;
          }
        });
      }

      // Rating
      if (filters.rating) {
        filteredServices = filteredServices.filter((service) => {
          switch (filters.rating) {
            case "4+ Stars":
              return service.rating >= 4;
            case "4.5+ Stars":
              return service.rating >= 4.5;
            case "5 Stars":
              return service.rating === 5;
            default:
              return true;
          }
        });
      }

      // Availability
      if (filters.availability) {
        switch (filters.availability) {
          case "Available Now":
          case "Available Today":
            filteredServices = filteredServices.filter((service) => service.available);
            break;
          default:
            break;
        }
      }

      // Sorting
      filteredServices.sort((a, b) => {
        switch (filters.sortBy) {
          case "rating":
            return b.rating - a.rating;
          case "price":{
            const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
            const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
            return priceA - priceB;
          }
          case "reviews":
            return (b.reviews || 0) - (a.reviews || 0);
          case "experience":{
            const expA = parseInt(a.experience?.replace(/[^\d]/g, "") || "0");
            const expB = parseInt(b.experience?.replace(/[^\d]/g, "") || "0");
            return expB - expA;
          }
          default:
            return 0;
        }
      });

      return filteredServices;
    },
    [filters]
  );

  const value: FilterContextType = {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilters = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
