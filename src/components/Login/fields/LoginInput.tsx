import React, { ReactNode } from "react";

interface LoginInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: ReactNode;
}

const LoginInput: React.FC<LoginInputProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  icon,
}) => {
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
          {icon}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default LoginInput;
