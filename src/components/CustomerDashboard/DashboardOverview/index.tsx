import * as React from "react";
import { StatItem, Booking, Provider } from "../../../types/customerDashboard.types";
import StatsGrid from "./StatsGrid";
import RecentBookings from "./RecentBookings";
import FavoriteList from "../FavoriteList";

interface DashboardOverviewProps {
  stats: StatItem[];
  bookings: Booking[];
  favorites: Provider[];
  onTabChange: (tab: string) => void;
  getStatusColor: (status: string) => string;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  stats,
  bookings,
  favorites,
  onTabChange,
  getStatusColor,
}) => {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <StatsGrid stats={stats} />

      {/* Bookings and Favorites */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentBookings
          bookings={bookings}
          onViewAll={() => onTabChange("bookings")}
          getStatusColor={getStatusColor}
        />
        <FavoriteList
          favorites={favorites}
          onViewAll={() => onTabChange("favorites")}
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
