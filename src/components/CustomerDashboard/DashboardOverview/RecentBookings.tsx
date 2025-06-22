import * as React from "react";
import { Booking } from "../../../types/customerDashboard.types";
// import { Calendar, Clock } from "lucide-react";

interface RecentBookingsProps {
  bookings: Booking[];
  onViewAll: () => void;
  getStatusColor: (status: string) => string;
}

const RecentBookings: React.FC<RecentBookingsProps> = ({
  bookings,
  onViewAll,
  getStatusColor,
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
        <button
          onClick={onViewAll}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </button>
      </div>
      <div className="space-y-4">
        {bookings.slice(0, 3).map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg p-4 hover-lift"
          >
            <div className="flex items-center space-x-4">
              <img
                src={booking.image}
                alt={booking.service}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{booking.service}</h4>
                <p className="text-sm text-gray-600">{booking.provider}</p>
                <p className="text-xs text-gray-500">
                  {booking.date} at {booking.time}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  {booking.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;
