import React from "react";

const DemoCredentials: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-medium text-gray-900 mb-2">Demo Credentials:</h4>
      <div className="space-y-1 text-sm text-gray-600">
        <p>
          <strong>Customer:</strong> customer / password123
        </p>
        <p>
          <strong>Provider:</strong> provider / password123
        </p>
        <p>
          <strong>Admin:</strong> admin / admin123
        </p>
      </div>
    </div>
  );
};

export default DemoCredentials;
