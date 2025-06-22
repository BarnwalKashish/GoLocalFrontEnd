// components/Signup/SignupProvider/UserTypeToggle.tsx
import React from "react";
import { Link } from "react-router-dom";

export type UserTypeToggleProps = {
  currentType: "helper" | "customer";
  onSwitch: (type: "helper" | "customer") => void;
};

const UserTypeToggle: React.FC<UserTypeToggleProps> = ({ currentType, onSwitch }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-1 rounded-xl mb-8 max-w-xs mx-auto shadow-lg">
      <div className="grid grid-cols-2 gap-1">
        <button
          onClick={() => onSwitch("helper")}
          className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentType === "helper"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🔧 Service Provider
        </button>
        <Link
          to="/signup/customer"
          className="py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 text-center"
        >
          👤 Customer
        </Link>
      </div>
    </div>
  );
};

export default UserTypeToggle;
