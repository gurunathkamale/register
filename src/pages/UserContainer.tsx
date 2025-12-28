import React, { useEffect, useState } from "react";
import { getUsers, postData } from "../services/user.services";
import type { CreatePayloadPost, User } from "../types/user.types";


import { Outlet } from "react-router-dom";


const UserContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        if (isMounted) {
          setUsers(res);
          console.log(res)
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

  const handlePost = async (payload: CreatePayloadPost): Promise<void> => {
    const newPost = await postData(payload);

    setUsers((prev) => [...prev, newPost]);
  };

  return (
    <>
      
      <Outlet context={{ users, loading, onPost: handlePost }} />
    </>
  );
};
export default UserContainer;
