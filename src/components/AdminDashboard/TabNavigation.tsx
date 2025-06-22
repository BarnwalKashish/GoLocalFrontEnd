// components/AdminDashboard/TabNavigation.tsx
import * as React from "react";
import { TrendingUp, Users, Activity, BarChart3 } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const tabs: Tab[] = [
  { id: "overview", label: "Overview", icon: TrendingUp },
  { id: "users", label: "Users", icon: Users },
  { id: "customer", label: "Customer", icon: Activity },
  { id: "provider", label: "Provider", icon: BarChart3 },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
