import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
