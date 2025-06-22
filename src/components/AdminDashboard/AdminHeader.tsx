// We'll start with the first component:
// File: /components/AdminDashboard/AdminHeader.tsx
import * as React from "react";
import { Shield, Globe } from "lucide-react";
import { useAuth } from"../../contexts/AuthContext";

const AdminHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={
            "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=150"
          }
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {user?.username} Manage your platform efficiently
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-600">Admin</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">System Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
