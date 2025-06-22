// hooks/useCustomers.ts
import { useEffect, useState } from "react";
import axios from "axios";

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

const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get<Customer[]>(
          "http://localhost:8080/api/admin/get-customers",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCustomers(res.data);
        setError(null);
      } catch {
        setError("Failed to fetch customers");
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return { customers, loading, error };
};

export default useCustomers;
