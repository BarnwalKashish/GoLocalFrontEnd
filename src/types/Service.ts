export interface Service {
  name: string;
  category: string;
  description?: string;
  location: string;
  price: string;          // e.g., "₹500"
  rating: number;
  available: boolean;
  reviews?: number;
  experience?: string;    // e.g., "5 years"
}
