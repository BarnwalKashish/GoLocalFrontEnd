import * as React from "react";
import { StatItem } from "../../../types/customerDashboard.types";

interface StatsGridProps {
  stats: StatItem[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6 hover-lift">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}
            >
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
