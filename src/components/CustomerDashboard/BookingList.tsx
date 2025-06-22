import * as React from "react";
import { Booking } from "../../types/customerDashboard.types";
import { Calendar, Clock, Eye, MessageCircle, Star } from "lucide-react";

interface BookingListProps {
  bookings: Booking[];
  getStatusColor: (status: string) => string;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, getStatusColor }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.image}
                    alt={booking.service}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{booking.service}</h4>
                    <p className="text-gray-600">Provider: {booking.provider}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{booking.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      booking.status
                    )} mb-2 inline-block`}
                  >
                    {booking.status}
                  </span>
                  <p className="text-xl font-bold text-gray-900">{booking.amount}</p>

                  <div className="flex items-center space-x-2 mt-4">
                    {booking.status === "completed" && !booking.rating && (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Rate Service
                      </button>
                    )}
                    {booking.status === "completed" && booking.rating && (
                      <div className="flex items-center space-x-1">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    )}
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
