import React from "react";
import { MapPin } from "lucide-react";

interface AuthHeaderProps {
  activeTab: "signin" | "signup";
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ activeTab }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-premium-gradient rounded-2xl flex items-center justify-center">
          <MapPin className="h-7 w-7 text-white" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {activeTab === "signin" ? "Welcome Back!" : "Join Go Local"}
      </h2>
      <p className="text-gray-600">
        {activeTab === "signin"
          ? "Sign in to access your account"
          : "Create an account to get started"}
      </p>
    </div>
  );
};

export default AuthHeader;
