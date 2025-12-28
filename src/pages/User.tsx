
import type { User } from "../types/user.types";
import Loader from "../icons/Loader";
import { useOutletContext } from "react-router-dom";

type contextType = {
  loading: boolean;
  users: User[];
};

const UserPage = () => {
  const { loading, users } = useOutletContext<contextType>();

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
