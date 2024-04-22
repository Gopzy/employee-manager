import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

const EmployeeGrid = ({ employeeData, onDelete, onEdit }) => {
  const { photo, first_name, email, number, gender, _id } = employeeData;
  return (
    // w-80 max-w-md
    <div className="flex flex-col  max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-md">
      {/* w-80 h-45 */}
      <img src={photo} alt={"title"} className="object-cover w-70 h-40 " />
      <div className="flex  justify-between p-4">
        <div className="">
          <h2 className="text-lg font-semibold">{first_name}</h2>
          <p className="text-sm text-gray-600">{email.substring(0, 15)}</p>
          <p className="text-sm text-gray-600">{number}</p>
          <p className="text-sm text-gray-600">
            {gender === "F" ? "Female" : "Male"}
          </p>
        </div>
        <div className="flex flex-col-1 pt-14 gap-2">
          <div className="rounded-full bg-red-500 w-12 h-12 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              onClick={() => onDelete(_id)}
              icon={faTrashAlt}
              className="delete-icon text-white"
            />
          </div>
          <div className="rounded-full bg-green-400 w-12 h-12 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              onClick={() => onEdit(_id)}
              icon={faUserEdit}
              className="delete-icon text-white"
            />
          </div>
          {/* <button
            onClick={() => onEdit(_id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Ed
          </button> */}

          {/* <button
            onClick={() => onDelete(_id)}
            className="px-4 py-2  bg-red-900 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            De
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeGrid;
