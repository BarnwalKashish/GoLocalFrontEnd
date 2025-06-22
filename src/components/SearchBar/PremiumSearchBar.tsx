import * as React from "react";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../contexts/FilterContext";
import SearchInput from "./SearchInput";
import LocationInput from "./LocationInput";
import SearchButton from "./SearchButton";
import TrendingServices from "./TrendingServices";
import { TrendingService } from "../../types/Search";

const PremiumSearchBar: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { filters, updateFilter } = useFilters();

  const trendingServices: TrendingService[] = [
    { name: "Home Cleaning", icon: "🏠", trend: "+25%" },
    { name: "Plumbing", icon: "🔧", trend: "+18%" },
    { name: "Electrical Work", icon: "⚡", trend: "+22%" },
    { name: "Painting", icon: "🎨", trend: "+15%" },
    { name: "Gardening", icon: "🌱", trend: "+30%" },
    { name: "Tutoring", icon: "📚", trend: "+40%" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filters.search.trim() || filters.location.trim()) {
      const params = new URLSearchParams();
      if (filters.search) params.append("q", filters.search);
      if (filters.location) params.append("location", filters.location);
      if (filters.category) params.append("category", filters.category);
      if (filters.priceRange) params.append("priceRange", filters.priceRange);
      if (filters.rating) params.append("rating", filters.rating);
      if (filters.availability) params.append("availability", filters.availability);

      navigate(`/search?${params.toString()}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto relative dropdown-container">
      <div className="search-premium rounded-3xl p-2 shadow-premium">
        <form onSubmit={handleSearch} className="flex items-center">
          <SearchInput
            value={filters.search}
            onChange={(val) => {
              updateFilter("search", val);
              setShowSuggestions(true);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setShowSuggestions(true);
            }}
          />
          <div className="w-px h-8 bg-gray-300 mx-2" />
          <LocationInput
            value={filters.location}
            onChange={(val) => updateFilter("location", val)}
          />
          <SearchButton />
        </form>
      </div>

      {showSuggestions && (
        <div className="dropdown-content mt-4 p-6 animate-slide-down">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
            <h3 className="font-semibold text-gray-900">Trending Services</h3>
          </div>

          <TrendingServices
            services={trendingServices}
            onSelect={(serviceName) => {
              updateFilter("search", serviceName);
              setShowSuggestions(false);
              navigate(
                `/search?q=${encodeURIComponent(serviceName)}&location=${encodeURIComponent(filters.location)}`
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PremiumSearchBar;
