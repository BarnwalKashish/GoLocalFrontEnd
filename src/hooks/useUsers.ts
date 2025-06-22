// hooks/useUsers.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../types/adminTypes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/api/admin/get-users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        setUsers([]);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  return { users, loading };
};
