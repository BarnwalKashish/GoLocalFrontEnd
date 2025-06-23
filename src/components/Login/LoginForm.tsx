import React from "react";
import { Loader, User } from "lucide-react";
import { PasswordField, LoginInput } from "./fields";

interface LoginFormProps {
  formData: { username: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  onChange,
  onSubmit,
  loading,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Username Field */}
      <LoginInput
        id="username"
        name="username"
        type="text"
        label="Username"
        value={formData.username}
        onChange={onChange}
        placeholder="Enter your username"
        icon={<User className="h-5 w-5 text-gray-400" />}
      />

      {/* Password Field */}
      <PasswordField
        id="password"
        name="password"
        label="Password"
        value={formData.password}
        onChange={onChange}
        placeholder="Enter your password"
        
      />

      {/* Remember Me */}
      <div className="flex items-center">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="space-y-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
