import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthUser } from "../../types/auth"; // ✅ Use shared type

interface MobileMenuProps {
  isAuthenticated: boolean;
  user: AuthUser | null;
  handleNavClick: (path: string) => void;
  setIsMenuOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isAuthenticated,
  user,
  handleNavClick,
  setIsMenuOpen,
}) => {
  const { logouts } = useAuth();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
  ];

  if (isAuthenticated && user) {
    const rolePath =
      user.role === "ROLE_ADMIN"
        ? "/admin-dashboard"
        : user.role === "ROLE_PROVIDER"
        ? "/provider-dashboard"
        : "/customer-dashboard";

    navItems.push({ path: rolePath, label: "Dashboard" });
  }

  const handleLogout = () => {
    logouts();
    setIsMenuOpen(false);
    handleNavClick("/");
  };

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-20 border-t border-gray-200 animate-slide-down z-[99]">
      <div className="px-4 py-6 space-y-4">
        {/* Nav Items */}
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className="block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            {item.label}
          </button>
        ))}

        {/* Auth Actions */}
        <div className="pt-4">
          {isAuthenticated && user ? (
            <div className="space-y-4">
              {/* User Info */}
              <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-xl">
                <img
                  src={
                    user.avatar ||
                    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
                  }
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full text-center px-4 py-3 text-red-600 border-2 border-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => handleNavClick("/login")}
                className="flex-1 text-center px-4 py-3 text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick("/signup/customer")}
                className="flex-1 text-center btn-premium text-white px-4 py-3 rounded-xl font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
