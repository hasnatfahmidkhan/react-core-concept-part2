import React, { use } from "react";
import User from "./User";
const Users = ({ fetchUsers }) => {
  const usersPromise = use(fetchUsers);
  return (
    <div>
      <h2 className="text-4xl border-2 border-green-700 mb-3 p-4 rounded-2xl">
        Users:{usersPromise.length}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {usersPromise.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
