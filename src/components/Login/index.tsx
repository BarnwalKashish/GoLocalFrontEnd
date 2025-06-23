import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

// Subcomponents
import AuthHeader from "./AuthHeader";
import AuthTabs from "./AuthTabs";
import AuthMessages from "./AuthMessages";
import LoginForm from "./LoginForm";
import SignupOptions from "./SignupOptions";
import DemoCredentials from "./DemoCredentials";

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loading, isAuthenticated, setUser } = useAuth();

  const navigate = useNavigate();
//   const location = useLocation();
  const from = "/login";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      if (activeTab === "signin") {
        const response = await axios.post("http://localhost:8080/api/auth/login", {
          username: formData.username,
          password: formData.password,
        });

        const token = response.data.accessToken;
        const role = response.data.role;

        localStorage.setItem("token", token);

        const res = await axios.get("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setUser(res.data);

        if (token) {
          setSuccess("Login successful! Redirecting...");
          if (role === "ROLE_ADMIN") {
            navigate("/admin-dashboard");
          } else if (role === "ROLE_PROVIDER") {
            navigate("/provider-dashboard");
          } else if (role === "ROLE_CUSTOMER") {
            navigate("/customer-dashboard");
          } else {
            navigate(from);
          }
        } else {
          setError("Invalid username or password");
        }
      } else {
        if (formData.username) {
          navigate("/signup/helper");
        } else {
          navigate("/signup/customer");
        }
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 opacity-20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-400 opacity-20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-400 opacity-15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-300 opacity-20 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Login Card */}
      <div className="relative max-w-md w-full">
        <div className="bg-white/95 backdrop-blur-20 rounded-3xl shadow-premium p-8 border border-white/20">
          <AuthHeader activeTab={activeTab} />
          <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "signin" ? (
            <>
              <LoginForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                loading={loading}
              />
              <AuthMessages error={error} success={success} />
              <DemoCredentials />
            </>
          ) : (
            <SignupOptions />
          )}

          {/* Toggle Between Tabs */}
          <div className="mt-8 text-center">
            {activeTab === "signin" ? (
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveTab("signup")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up here
                </button>
              </p>
            ) : (
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("signin")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
