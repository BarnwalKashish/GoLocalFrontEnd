import * as React from "react";
import { MapPin } from "lucide-react";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex-1 flex items-center px-4">
      <MapPin className="h-6 w-6 text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Enter your location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none text-lg text-gray-700 placeholder-gray-500 font-medium"
      />
    </div>
  );
};

export default LocationInput;
