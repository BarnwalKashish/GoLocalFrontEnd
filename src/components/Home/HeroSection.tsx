// src/components/Home/HeroSection.tsx

import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Clock, Zap } from "lucide-react";
import PremiumSearchBar from "../../components/SearchBar/PremiumSearchBar";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 opacity-20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-400 opacity-15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300 opacity-20 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-down" : "opacity-0"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Find Local
            <span className="block text-gradient text-glow typing-animation">
              Professionals
            </span>
          </h1>
          <p className="text-2xl mb-12 text-orange-100 leading-relaxed max-w-4xl mx-auto">
            Connect with skilled professionals in your neighborhood. From home repairs to personal services, discover trusted local experts who care about your community.
          </p>
        </div>

        {/* Premium Search Bar */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 relative z-[50] ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          <PremiumSearchBar />
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? "animate-zoom-in" : "opacity-0"}`}
        >
          <Link
            to="/signup/customer"
            className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-premium flex items-center justify-center"
          >
            Find Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/signup/helper"
            className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Zap className="mr-2 h-5 w-5" />
            Become a Provider
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-orange-200">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2 text-green-300" />
            <span className="font-semibold">100% Verified</span>
          </div>
          <div className="flex items-center">
            <Star className="h-6 w-6 mr-2 text-yellow-300" />
            <span className="font-semibold">4.9★ Rating</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-6 w-6 mr-2 text-purple-300" />
            <span className="font-semibold">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
