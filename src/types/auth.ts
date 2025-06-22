// src/types/auth.ts

export type UserRole = "ROLE_CUSTOMER" | "ROLE_PROVIDER" | "ROLE_ADMIN";

export interface AuthUser {
  username:string;
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  fullName?: string;
  imageUrl?: string;
  profile?: string;
  phone: string;
  location: string;
}


export interface RegisterPayload {
  name: string;
  phone: string;
  location: string;
  role: UserRole;
  serviceCategory?: string;
  description?: string;
}
