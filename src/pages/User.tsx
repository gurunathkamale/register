import React, { useEffect, useState } from "react";
import { getUsers } from "../services/user.services";
import type { User } from "../types/user.types";
import Loader from "../icons/Loader";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        if (isMounted) {
          setUsers(res);
        }
      } catch (error) {
        if (isMounted) {
          console.log("Failed to fetch users", error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchUsers();

    return () => {
      isMounted = true;
    };

  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-3">Users</h1>
      {Array.isArray(users) &&
        users.slice(0, 10).map((user, index) => (
          <div key={index} className="border p-3 mb-3 rounded">
            <p className="font-bold">{user.id}</p>
            <h3 className="font-bold">{user.title}</h3>
            <p className="text-sm text-gray-600">{user.body}</p>
          </div>
        ))}
    </div>
  );
};

export default UserPage;
