// src/types/User.ts

export interface Users {
  id?: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;   // used in MobileMenu
  profile?: string;  // used in UserMenu
}
