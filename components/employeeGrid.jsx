import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

const EmployeeGridItem = ({ employeeData, onDelete, onEdit }) => {
  const { photo, first_name, email, number, gender, _id } = employeeData;
  return (
    // w-80 max-w-md
    <div className="flex flex-col min-w-[250px]  max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <img src={photo} alt={"title"} className="object-cover w-70 h-40 " />
      <div className="flex  justify-between p-4">
        <div className="">
          <h2 className="text-lg font-semibold">{first_name}</h2>
          <p className="text-sm text-gray-600">{email.substring(0, 13)}</p>
          <p className="text-sm text-gray-600">{number}</p>
          <p className="text-sm text-gray-600">
            {gender === "F" ? "Female" : "Male"}
          </p>
        </div>
        <div className="flex flex-col-1 pt-14 gap-2">
          <div
            onClick={() => onDelete(_id)}
            className="rounded-full bg-red-500 w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="delete-icon text-white"
            />
          </div>
          <div
            onClick={() => onEdit(_id)}
            className="rounded-full bg-green-400 w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faUserEdit}
              className="edit-icon text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeGridItem;
