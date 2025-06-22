import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MapPin, User } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { AuthUser } from "../../types/auth"; // ✅ Import shared AuthUser type

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const getNavItems = () => {
    const base = [
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

      base.push({ path: rolePath, label: "Dashboard" });
    }

    return base;
  };

  const navItems = getNavItems();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-20 shadow-premium" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-premium-gradient rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gradient">Go Local</span>
              <div className="text-xs text-gray-500 font-medium">Premium Services</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 hover-lift ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-premium-gradient rounded-full" />
                )}
              </button>
            ))}

            {/* User or Auth Buttons */}
            {isAuthenticated && user ? (
              <UserMenu
                user={user as AuthUser}
                showUserMenu={showUserMenu}
                setShowUserMenu={setShowUserMenu}
                handleNavClick={handleNavClick}
              />
            ) : (
              <>
                <button
                  onClick={() => handleNavClick("/login")}
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 hover-lift"
                >
                  <User className="h-5 w-5" />
                </button>

                <button
                  onClick={() => handleNavClick("/signup/customer")}
                  className="btn-premium text-white px-6 py-3 rounded-2xl font-semibold hover-lift shadow-glow"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <MobileMenu
          user={user}
          isAuthenticated={isAuthenticated}
          handleNavClick={handleNavClick}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
