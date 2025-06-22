// types/adminTypes.ts

// User type used across users and auth
export interface User {
  username: string;
  password?: string;
  role: string;
  isDeleted?: boolean;
}

// Customer type
export interface Customer {
  username: string;
  customerName: string;
  location: string;
  mobileNumber: bigint;
  email: string;
  rating: string;
  profilePicture: Uint8Array;
  noOfBookings: number;
}

// Service nested in Provider
export interface Service {
  serviceId: string;
  serviceName: string;
  noOfUser: number;
}

// Provider type
export interface Provider {
  username: string;
  providerName: string;
  location: string;
  mobileNumber: bigint;
  email: string;
  rating: string;
  profilePicture: Uint8Array;
  noOfBookings: number;
  service: Service;
  experience: number;
  description: Uint8Array;
  noOfTimesBooked: number;
}

// Admin dashboard stat card structure
export interface StatCard {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  color: string;
  bg: string;
}

// For recent activity items
export interface ActivityItem {
  id: string;
  type: string;
  message: string;
  time: string;
  status: "info" | "success" | "warning" | "error" | string;
}
