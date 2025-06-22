import React, { useState } from "react";
import {
  Calendar,
  CreditCard,
  Heart,
  Star,
  // TrendingUp,
  // Settings,
  // User,
} from "lucide-react";

import { useAuth } from "../contexts/AuthContext";

// Subcomponents
import DashboardHeader from "../components/CustomerDashboard/DashboardHeader";
import DashboardTabs from "../components/CustomerDashboard/DashboardTabs";
import DashboardOverview from "../components/CustomerDashboard/DashboardOverview";
import BookingList from "../components/CustomerDashboard/BookingList";
import FavoriteList from "../components/CustomerDashboard/FavoriteList";
import ProfileForm from "../components/CustomerDashboard/ProfileForm";
import SettingsPanel from "../components/CustomerDashboard/SettingsPanel";

// Types
import {
  Booking,
  Provider,
  StatItem,
  UserProfile,
} from "../types/customerDashboard.types";

const CustomerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const bookings: Booking[] = [
    {
      id: "1",
      service: "Home Cleaning",
      provider: "Sarah Johnson",
      date: "2024-01-20",
      time: "2:00 PM",
      status: "confirmed",
      amount: "₹800",
      rating: null,
      image:
        "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      service: "Electrical Work",
      provider: "Michael Chen",
      date: "2024-01-18",
      time: "10:00 AM",
      status: "completed",
      amount: "₹1200",
      rating: 5,
      image:
        "https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      service: "Plumbing",
      provider: "David Wilson",
      date: "2024-01-15",
      time: "11:30 AM",
      status: "completed",
      amount: "₹950",
      rating: 4,
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const favorites: Provider[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      service: "Home Cleaning",
      rating: 4.9,
      reviews: 127,
      price: "₹500/hour",
      image:
        "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      name: "Michael Chen",
      service: "Electrical Work",
      rating: 4.8,
      reviews: 89,
      price: "₹800/hour",
      image:
        "https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const stats: StatItem[] = [
    {
      icon: Calendar,
      label: "Total Bookings",
      value: "12",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: Heart,
      label: "Favorite Providers",
      value: "8",
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      icon: CreditCard,
      label: "Total Spent",
      value: "₹8,450",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Star,
      label: "Average Rating Given",
      value: "4.7",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <DashboardHeader user={user as UserProfile} />

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <DashboardOverview
                stats={stats}
                bookings={bookings}
                favorites={favorites}
                onTabChange={setActiveTab}
                getStatusColor={getStatusColor}
              />
            )}

            {activeTab === "bookings" && (
              <BookingList
                bookings={bookings}
                getStatusColor={getStatusColor}
              />
            )}

            {activeTab === "favorites" && (
              <FavoriteList
                favorites={favorites}
                onViewAll={() => setActiveTab("favorites")} // ✅ FIX
              />
            )}

            {activeTab === "profile" && (
              <ProfileForm user={user as UserProfile} />
            )}

            {activeTab === "settings" && <SettingsPanel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
