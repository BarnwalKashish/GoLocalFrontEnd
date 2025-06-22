import * as React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Go Local</span>
                <div className="text-xs text-gray-400">Premium Services</div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Connecting local communities with skilled professionals. Find
              trusted services in your neighborhood and support local businesses
              with our premium platform.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover-lift"
                    aria-label={social}
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Join Our Platform</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button
                  onClick={() => handleNavClick("/signup/helper")}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block"
                >
                  Become a Provider
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/signup/customer")}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block"
                >
                  Find Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/dashboard")}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block"
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Go Local. All rights reserved. Supporting local
              communities worldwide.
            </p>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => handleNavClick("/privacy")}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick("/terms")}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavClick("/support")}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
