import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle, Shield, Globe } from "lucide-react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-400 opacity-10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Ready to Go Local?
        </h2>
        <p className="text-2xl mb-12 text-orange-100 leading-relaxed">
          Join thousands of satisfied customers and professional service
          providers in your community today
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link
            to="/signup/customer"
            className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-premium flex items-center justify-center"
          >
            Find Local Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/signup/helper"
            className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Zap className="mr-2 h-5 w-5" />
            Start Earning Today
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-orange-200">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 mr-2" />
            <span className="font-semibold">Free to Join</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            <span className="font-semibold">Verified Professionals</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-6 w-6 mr-2" />
            <span className="font-semibold">Local Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
