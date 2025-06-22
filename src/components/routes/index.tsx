// src/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";

// Layout & Pages
import Layout from "../layout/Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Login from "../../pages/Login";
import SignupCustomer  from "../../pages/SignupCustomer";
import SignupHelper from "../../pages/SignupProvider";
import SearchResults from "../../pages/SearchResults";

// Dashboards (role-specific)
// import CustomerDashboard from "../../pages/dashboards/CustomerDashboard";
// import ProviderDashboard from "../../pages/dashboards/ProviderDashboard";
import AdminDashboard from "../../pages/AdminDashboard";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public layout wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Public Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="signup/customer" element={<SignupCustomer />} />
        <Route path="signup/helper" element={<SignupHelper />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* Protected Routes */}
        {/* <Route
          path="customer-dashboard"
          element={
            <ProtectedRoute roles={["ROLE_CUSTOMER"]}>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="provider-dashboard"
          element={
            <ProtectedRoute roles={["ROLE_PROVIDER"]}>
              <ProviderDashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="admin-dashboard"
          element={
            <ProtectedRoute roles={["ROLE_ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
