import React from "react";
import { Briefcase, LucideIcon } from "lucide-react";

interface SelectOccupationProps {
  id: string;
  name: string;
  icon: LucideIcon;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  occupations: string[];
}

const SelectOccupation: React.FC<SelectOccupationProps> = ({
  id,
  name,
  value,
  onChange,
  occupations,
  icon: Icon,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        Service Category
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Briefcase className="h-5 w-5 text-gray-400" />
        </div>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="w-5 h-5 text-gray-400" />
        </span>

        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white/80"
        >
          <option value="">Select your service</option>
          {occupations.map((occ) => (
            <option key={occ} value={occ}>
              {occ}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectOccupation;
