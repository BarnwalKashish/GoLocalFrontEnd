import * as React from "react";
import { Activity, Users } from "lucide-react";

interface QuickActionsProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const QuickActions: React.FC<QuickActionsProps> = ({ setActiveTab }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => setActiveTab("users")}
          className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center"
        >
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="font-medium text-gray-900">Manage Users</p>
        </button>
        <button
          onClick={() => setActiveTab("customer")}
          className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center"
        >
          <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="font-medium text-gray-900">All Customers</p>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
