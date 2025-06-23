import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface AuthMessagesProps {
  error?: string;
  success?: string;
}

const AuthMessages: React.FC<AuthMessagesProps> = ({ error, success }) => {
  return (
    <div className="space-y-4">
      {error && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <XCircle className="h-5 w-5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
          <CheckCircle className="h-5 w-5" />
          <span className="text-sm">{success}</span>
        </div>
      )}
    </div>
  );
};

export default AuthMessages;
