import { LucideIcon } from "lucide-react";

export interface Booking {
  id: string;
  service: string;
  provider: string;
  date: string;
  time: string;
  status: string;
  amount: string;
  rating: number | null;
  image: string;
}

export interface Provider {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  bg: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
}
