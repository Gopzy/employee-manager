import React, { Component } from "react";

const Employee = ({ employeeData, onDelete }) => {
  const { photo, first_name, email, number, gender, _id } = employeeData;
  return (
    <div className="flex flex-col w-80 max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <img src={photo} alt={"title"} className="w-80 h-45 object-cover" />
      <div className="flex  justify-between p-4">
        <div className="">
          <h2 className="text-lg font-semibold">{first_name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{number}</p>
          <p className="text-sm text-gray-600">
            {gender === "F" ? "Female" : "Male"}
          </p>
        </div>
        <div className="pt-14">
          <button
            onClick={() => onDelete(_id)}
            className="px-4 py-2  bg-red-900 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
