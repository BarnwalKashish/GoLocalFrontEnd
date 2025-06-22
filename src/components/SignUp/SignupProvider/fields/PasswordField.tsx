import React from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  toggleVisibility: () => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
  showPassword,
  toggleVisibility
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/80"
          placeholder={label}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
