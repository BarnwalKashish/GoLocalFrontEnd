// pages/AdminDashboard.tsx

import * as React from "react";
import { useState } from "react";
import { Shield, Globe } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useUsers } from "../hooks/useUsers";
import useCustomers from "../hooks/useCustomers";
import useProviders from "../hooks/useProviders";

import TabNavigation from "../components/AdminDashboard/TabNavigation";
import StatsGrid from "../components/AdminDashboard/StatsGrid";
import PlatformGrowthChart from "../components/AdminDashboard/PlatformGrowthChart";
import RecentActivity from "../components/AdminDashboard/RecentActivity";
import QuickActions from "../components/AdminDashboard/QuickActions";
import UsersTable from "../components/AdminDashboard/UsersTable";
import CustomersTable from "../components/AdminDashboard/CustomersTable";
import ProvidersTable from "../components/AdminDashboard/ProvidersTable";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const { users } = useUsers();
  const { customers } = useCustomers();
  const { providers } = useProviders();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={
                "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=150"
              }
              alt="admin avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user?.username}! Manage your platform
                efficiently.
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-red-600">
                    Admin
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-600">System Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <StatsGrid stats={[]} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <PlatformGrowthChart />
                </div>
                <RecentActivity activityList={[]} />
              </div>
              <QuickActions setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === "users" && <UsersTable users={users} />}
          {activeTab === "customer" && <CustomersTable customers={customers} />}
          {activeTab === "provider" && <ProvidersTable providers={providers} />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
