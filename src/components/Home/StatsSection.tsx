import * as React from "react";
import { Users, CheckCircle, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Happy Customers",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: CheckCircle,
    value: "75,000+",
    label: "Jobs Completed",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Award,
    value: "8,000+",
    label: "Verified Providers",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${stat.bg} rounded-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow`}
              >
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
