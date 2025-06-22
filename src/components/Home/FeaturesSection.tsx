import * as React from "react";
import { Shield, Clock, Star, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description:
      "All service providers are thoroughly vetted and background-checked for your safety and peace of mind.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Get connected with available professionals in your area within minutes, not hours.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description:
      "Our rating system and reviews ensure you always get the best service quality.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description:
      "Support your local community by connecting with neighborhood professionals.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Go Local?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to connecting you with the best local professionals while supporting your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group card-glow bg-white rounded-3xl p-8 shadow-premium hover-lift"
            >
              <div
                className={`w-24 h-24 ${feature.bg} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`h-12 w-12 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
