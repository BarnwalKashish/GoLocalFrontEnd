import * as React from "react";
import { UserProfile } from "../../types/customerDashboard.types";

interface DashboardHeaderProps {
  user: UserProfile | null;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={
            user?.avatar ||
            "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
          }
          alt={user?.name || "User"}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Manage your bookings and discover new services
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
