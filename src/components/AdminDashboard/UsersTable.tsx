// components/AdminDashboard/UsersTable.tsx
import * as React from "react";
import { User } from "../../types/adminTypes";
import getRoleColor  from "../../utils/getRoleColor"; // ✅ Import here

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.username} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
