import React, { useState } from "react";

import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import type { CreatePayloadPost } from "../types/user.types";
import Loader from "../icons/Loader";
import { useOutletContext } from "react-router-dom";


// type props ={
//     onPost:(payload: CreatePayloadPost)=> Promise<void>
// }

type ContextType = {
    onPost:(payload: CreatePayloadPost)=>Promise<void>
}

const PostUser = () => {
    const {onPost} = useOutletContext<ContextType>()
  const [userData, setUserData] = useState<CreatePayloadPost>({
    title: "",
    body: "",
    userId: null,
  });
  const [loading, setLoading] = useState(false);


  const handleData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onPost(userData)
      setUserData({title: "",
    body: "",
    userId: null,})
    } catch (error) {
      console.error("POST Failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  return (
     <div className=" min-h-screen flex items-center flex-col justify-center bg-gradient-to-bl from-indigo-400 via-purple-500 to-pink-500">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
      User Form </h3>
      <div className="bg-slate-300 w-[360px] p-8 rounded-xl shadow-lg">
        <form onSubmit={handleData}>
          <InputField
            type="number"
            label="UserId"
            placeholder="Enter userId"
            value={String(userData.userId ?? "")}
            onChange={(value) =>
              setUserData((prev) => ({
                ...prev,
                userId: value === "" ? null : Number(value),
              }))
            }
          />
          <InputField
            type="text"
            label="title"
            placeholder="Enter title"
            value={userData.title}
            onChange={(value) =>
              setUserData((prev) => ({
                ...prev,
                title: value,
              }))
            }
          />
          <InputField
            type="text"
            label="body"
            placeholder="Enter body"
            value={userData.body}
            onChange={(value) =>
              setUserData((prev) => ({
                ...prev,
                body: value,
              }))
            }
          />
          <Button type="submit" label="Submit" />
        </form>
      </div>
      </div>
    // </div>
  );
};

export default PostUser;
