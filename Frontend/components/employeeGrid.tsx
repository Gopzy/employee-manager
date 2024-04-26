import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import BtnCircle from "./button/btnCircle";
import { employeeDataType } from "@/types/types";

const EmployeeGridItem = ({
  employeeData,
  onDelete,
  onEdit,
}: {
  employeeData: employeeDataType;
  onDelete: (string) => void;
  onEdit: (string) => void;
}) => {
  const { photo, first_name, email, number, gender, _id } = employeeData;

  return (
    <div className="flex flex-col min-w-[250px]  max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <img src={photo} alt={"title"} className="object-cover w-70 h-40 " />
      <div className="flex  justify-between p-4">
        <div className="">
          <h2 className="text-lg font-semibold">{first_name}</h2>
          <p className="text-sm text-gray-600">
            {email.length > 12 ? email.substring(0, 12) + "..." : email}
          </p>
          <p className="text-sm text-gray-600">{number}</p>
          <p className="text-sm text-gray-600">
            {gender === "F" ? "Female" : "Male"}
          </p>
        </div>
        <div className="flex flex-col-1 pt-14 gap-2">
          <BtnCircle
            onClick={() => onDelete(_id)}
            btnStyle=" bg-red-500 w-10 h-10 ext-white   rounded-full "
            icon={
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete-icon text-white"
              />
            }
          />
          <BtnCircle
            onClick={() => onEdit(_id)}
            btnStyle=" bg-green-400 w-10 h-10 ext-white  rounded-full "
            icon={
              <FontAwesomeIcon
                icon={faUserEdit}
                className="edit-icon text-white"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeGridItem;
