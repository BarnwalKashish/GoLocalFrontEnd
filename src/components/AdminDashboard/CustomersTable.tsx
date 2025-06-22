// components/AdminDashboard/CustomersTable.tsx
import * as React from "react";

interface Customer {
  username: string;
  customerName: string;
  location: string;
  mobileNumber: bigint;
  email: string;
  rating: string;
  profilePicture: Uint8Array;
  noOfBookings: number;
}

interface CustomersTableProps {
  customers: Customer[];
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers }) => {
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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.username} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{customer.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{String(customer.mobileNumber)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.profilePicture ? "[Image Data]" : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.noOfBookings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
