import * as React from "react";
import PremiumSearchBar from "../components/SearchBar/PremiumSearchBar";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import StatsSection from "../components/Home/StatsSection";
import CallToActionSection from "../components/Home/CallToActionSection";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero with Search Bar */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Trusted Local Professionals
        </h1>
        <p className="text-lg mb-8">
          From plumbing to wellness – connect with skilled providers near you
        </p>
        <div className="max-w-4xl mx-auto">
          <PremiumSearchBar />
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Features */}
      <FeaturesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CallToActionSection />
    </div>
  );
};

export default Home;
