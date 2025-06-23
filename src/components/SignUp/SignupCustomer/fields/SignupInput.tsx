import React from "react";

interface SignupInputProps {
  id:string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  required?: boolean;
}

const SignupInput: React.FC<SignupInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required = true,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</div>}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-3 pr-3 ${
            icon ? "pl-10" : "pl-3"
          } border border-gray-300 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SignupInput;
