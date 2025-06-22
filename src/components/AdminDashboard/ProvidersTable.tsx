// components/AdminDashboard/ProvidersTable.tsx
import * as React from "react";

interface Services {
  serviceId: string;
  serviceName: string;
  noOfUser: number;
}

interface Provider {
  username: string;
  providerName: string;
  location: string;
  mobileNumber: bigint;
  email: string;
  rating: string;
  profilePicture: Uint8Array;
  noOfBookings: number;
  service: Services;
  experience: number;
  description: Uint8Array;
  noOfTimesBooked: number;
}

interface ProvidersTableProps {
  providers: Provider[];
}

const ProvidersTable: React.FC<ProvidersTableProps> = ({ providers }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mobile
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profile Picture
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bookings
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Experience (yrs)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Times Booked
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {providers.map((provider) => (
            <tr key={provider.username} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{provider.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.providerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{String(provider.mobileNumber)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {provider.profilePicture ? "[Image Data]" : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.noOfBookings}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {provider.service.serviceName} (ID: {provider.service.serviceId}) – {provider.service.noOfUser} users
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.experience}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {provider.description ? "[Description Data]" : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{provider.noOfTimesBooked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProvidersTable;
