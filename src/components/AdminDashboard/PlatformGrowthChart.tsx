// components/AdminDashboard/PlatformGrowthChart.tsx
import * as React from "react";
import { BarChart3 } from "lucide-react";

const PlatformGrowthChart: React.FC = () => {
  return (
    <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Platform Growth
      </h3>
      <div className="h-64 bg-white rounded-lg flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Growth chart would go here</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformGrowthChart;
