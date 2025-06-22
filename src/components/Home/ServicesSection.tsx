import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, TrendingUp, Wrench, Home, Car, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Home Repairs",
    description: "Professional repair and maintenance services for your home",
    color: "from-blue-500 to-cyan-500",
    count: "2,500+ providers",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Home,
    title: "Cleaning Services",
    description: "House cleaning and organizing services by experts",
    color: "from-green-500 to-emerald-500",
    count: "1,800+ providers",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Car repair and maintenance services at your doorstep",
    color: "from-orange-500 to-red-500",
    count: "900+ providers",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Paintbrush,
    title: "Beauty & Wellness",
    description: "Personal care and wellness services for your wellbeing",
    color: "from-purple-500 to-pink-500",
    count: "1,200+ providers",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span className="font-semibold">Most Popular</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most requested services in your area and connect with
            top-rated professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
              className="group card-premium rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}
                ></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-bold">
                      {service.rating}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-12 w-12 text-white mb-2" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    {service.count}
                  </span>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Explore
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
