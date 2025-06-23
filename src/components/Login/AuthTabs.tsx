import React from "react";

interface AuthTabsProps {
  activeTab: "signin" | "signup";
  onTabChange: (tab: "signin" | "signup") => void;
}

const AuthTabs: React.FC<AuthTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
      <button
        onClick={() => onTabChange("signin")}
        className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
          activeTab === "signin"
            ? "bg-white text-blue-600 shadow-md"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => onTabChange("signup")}
        className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
          activeTab === "signup"
            ? "bg-white text-blue-600 shadow-md"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthTabs;
