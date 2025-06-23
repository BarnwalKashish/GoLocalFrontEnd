import React from "react";
import { Link } from "react-router-dom";

interface UserTypeToggleProps {
  currentType: "customer" | "helper";
  onSwitch?: (type: "customer" | "helper") => void;
}

const UserTypeToggle: React.FC<UserTypeToggleProps> = ({ currentType, onSwitch }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-1 rounded-xl mb-8 max-w-xs mx-auto shadow-lg">
      <div className="grid grid-cols-2 gap-1">
        <Link
          to="/signup/helper"
          onClick={() => onSwitch?.("helper")}
          className={`py-3 px-4 rounded-lg text-sm font-medium text-center transition-all duration-200 ${
            currentType === "helper"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🔧 Service Provider
        </Link>
        <button
          onClick={() => onSwitch?.("customer")}
          className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-center ${
            currentType === "customer"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          👤 Customer
        </button>
      </div>
    </div>
  );
};

export default UserTypeToggle;
