import * as React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { AuthUser, UserRole, RegisterPayload } from "../types/auth";

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logouts: () => Promise<boolean>;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  register: (data: RegisterPayload, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("go_local_user");

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);

        const isValidRole = (role: string): role is UserRole =>
          ["ROLE_CUSTOMER", "ROLE_PROVIDER", "ROLE_ADMIN"].includes(role);

        if (isValidRole(parsedUser.role)) {
          const validUser: AuthUser = {
            ...parsedUser,
            role: parsedUser.role as UserRole,
          };
          setUser(validUser);
        } else {
          console.warn("Invalid role found in localStorage, clearing user.");
          localStorage.removeItem("go_local_user");
        }
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("go_local_user");
      }
    }

    setLoading(false);
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      const { accessToken, user: apiUser } = response.data;

      if (!["ROLE_CUSTOMER", "ROLE_PROVIDER", "ROLE_ADMIN"].includes(apiUser.role)) {
        throw new Error("Invalid user role");
      }

      const loggedInUser: AuthUser = {
        username: apiUser.username,
        id: apiUser.id,
        name: apiUser.name,
        email: apiUser.email,
        role: apiUser.role as UserRole,
        avatar: apiUser.avatar,
        fullName: apiUser.fullName,
        imageUrl: apiUser.imageUrl,
      };

      localStorage.setItem("token", accessToken);
      localStorage.setItem("go_local_user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setLoading(false);
      return true;
    } catch (err) {
      console.error("Login failed:", err);
      setLoading(false);
      return false;
    }
  };

  const logouts = async (): Promise<boolean> => {
    try {
      await axios.post("http://localhost:8080/api/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("go_local_user");
      setUser(null);
      return true;
    } catch (err) {
      console.error("Logout failed:", err);
      return false;
    }
  };

  const register = async (
    {
      name,
      phone,
      location,
      role,
      serviceCategory,
      description,
    }: RegisterPayload,
    password: string
  ): Promise<boolean> => {
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        name,
        phone,
        location,
        role,
        serviceCategory,
        description,
        password,
      });

      setLoading(false);
      return true;
    } catch (err) {
      console.error("Registration failed:", err);
      setLoading(false);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    login,
    logouts,
    register,
    isAuthenticated: !!user,
    setUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
