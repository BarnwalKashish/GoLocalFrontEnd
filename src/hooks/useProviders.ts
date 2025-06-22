// hooks/useProviders.ts
import { useEffect, useState } from "react";
import axios from "axios";

export interface Service {
  serviceId: string;
  serviceName: string;
  noOfUser: number;
}

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

const useProviders = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get<Provider[]>(
          "http://localhost:8080/api/admin/get-providers",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setProviders(res.data);
        setError(null);
      } catch {
        setError("Failed to fetch providers");
        setProviders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return { providers, loading, error };
};

export default useProviders;
