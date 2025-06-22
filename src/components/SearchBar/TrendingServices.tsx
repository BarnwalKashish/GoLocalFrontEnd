import * as React from "react";
import { TrendingService } from "../../types/Search";

interface TrendingServicesProps {
  services: TrendingService[];
  onSelect: (serviceName: string) => void;
}

const TrendingServices: React.FC<TrendingServicesProps> = ({ services, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {services.map((service, index) => (
        <button
          key={index}
          onClick={() => onSelect(service.name)}
          className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group hover-lift"
        >
          <span className="text-2xl mr-3">{service.icon}</span>
          <div className="text-left">
            <div className="font-medium text-gray-900 group-hover:text-blue-600">
              {service.name}
            </div>
            <div className="text-sm text-green-600 font-medium">{service.trend}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TrendingServices;
