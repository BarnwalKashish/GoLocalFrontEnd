// components/AdminDashboard/RecentActivity.tsx
import * as React from "react";
import { Activity, CheckCircle, AlertTriangle } from "lucide-react";

interface RecentActivityItem {
  id: string;
  type: string;
  message: string;
  time: string;
  status: "info" | "success" | "warning" | "error";
}

interface RecentActivityProps {
  activityList: RecentActivityItem[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activityList }) => {
  const getIcon = (status: string) => {
    switch (status) {
      case "info":
        return <Activity className="h-4 w-4 text-blue-600" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  const getBgColor = (status: string) => {
    switch (status) {
      case "info":
        return "bg-blue-100";
      case "success":
        return "bg-green-100";
      case "warning":
        return "bg-yellow-100";
      default:
        return "bg-red-100";
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activityList.map((activity) => (
          <div key={activity.id} className="bg-white rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getBgColor(activity.status)}`}>
                {getIcon(activity.status)}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
