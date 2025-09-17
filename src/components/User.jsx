import React from "react";

const User = ({ user }) => {
  const { name, company, address } = user;
  const { name: companyName } = company;
  const { city } = address;
  return (
    <div className="border-2 border-emerald-600 p-4 mb-2 rounded-lg space-y-1">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="font-medium">Company Name: {companyName}</p>
      <p className="font-medium">City: {city}</p>
    </div>
  );
};

export default User;
