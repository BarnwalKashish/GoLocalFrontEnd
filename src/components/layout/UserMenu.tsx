import * as React from "react";
import { Calendar, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AuthUser } from "../../types/auth"; // ✅ Import shared type

interface UserMenuProps {
  user: AuthUser;
  showUserMenu: boolean;
  setShowUserMenu: (value: boolean) => void;
  handleNavClick: (path: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  user,
  showUserMenu,
  setShowUserMenu,
  handleNavClick,
}) => {
  const navigate = useNavigate();
  const { logouts } = useAuth();

  const getDashboardPath = () => {
    switch (user.role) {
      case "ROLE_ADMIN":
        return "/admin-dashboard";
      case "ROLE_PROVIDER":
        return "/provider-dashboard";
      default:
        return "/customer-dashboard";
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
      >
        <img
          src={
            user.profile ||
            "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
          }
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium">{user.name}</span>
      </button>

      {showUserMenu && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-premium border border-gray-100 py-2 z-[200]">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                user.role === "ROLE_ADMIN"
                  ? "bg-red-100 text-red-800"
                  : user.role === "ROLE_PROVIDER"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {user.role}
            </span>
          </div>

          <div className="py-2">
            <button
              onClick={() => {
                handleNavClick(getDashboardPath());
                setShowUserMenu(false);
              }}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
            >
              <Calendar className="h-4 w-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                handleNavClick("/profile");
                setShowUserMenu(false);
              }}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>

            <button
              onClick={() => {
                logouts();
                setShowUserMenu(false);
                navigate("/");
              }}
              className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
