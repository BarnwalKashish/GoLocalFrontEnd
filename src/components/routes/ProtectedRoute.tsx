import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { UserRole } from "../../types/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: UserRole[];       // Allowed roles for the route
  requireAuth?: boolean;    // Defaults to true
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roles = [],
  requireAuth = true,
}) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && user && !roles.includes(user.role)) {
    // User is logged in but not authorized
    const redirectPath =
      user.role === "ROLE_ADMIN"
        ? "/admin-dashboard"
        : user.role === "ROLE_PROVIDER"
        ? "/provider-dashboard"
        : "/customer-dashboard";

    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
