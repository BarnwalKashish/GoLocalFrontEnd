import React from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
  show,
  setShow,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder={label}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {show ? (
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
