import React from "react";
import { Link } from "react-router-dom";

const SignupOptions: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center">
        Choose your account type to get started
      </p>
      <div className="space-y-3">
        <Link
          to="/signup/customer"
          className="block w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Sign Up as Customer
        </Link>
        <Link
          to="/signup/helper"
          className="block w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Sign Up as Service Provider
        </Link>
      </div>
    </div>
  );
};

export default SignupOptions;
