import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const tableTitle = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Action",
];

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  const getTitle = (title) => {
    return (
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs border border-gray-300 font-medium text-white uppercase tracking-wider"
      >
        {title}
      </th>
    );
  };

  return (
    <table className="min-w-full border bg-[#A7C941] divide-y divide-gray-300">
      <thead className="bg-[#A7C941]">
        <tr>{tableTitle.map((title) => getTitle(title))}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-[#A7C941]">
        {employees?.map((employeeData) => {
          const { photo, first_name, last_name, email, number, gender, _id } =
            employeeData;
          return (
            <tr key={_id}>
              <td className="border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                <img className="h-8 w-8 rounded" src={photo} alt={first_name} />
              </td>
              <td className=" border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                {first_name}
              </td>
              <td className=" border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                {last_name}
              </td>
              <td className=" border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                {email.substring(0, 15)}
              </td>
              <td className="border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                {number}
              </td>
              <td className="border border-[#A7C941] px-6 py-4 whitespace-nowrap">
                {gender === "F" ? "Female" : "Male"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onEdit(_id)}
                  className="  bg-slate-500 rounded-lg px-4 text-white hover:text-indigo-900"
                >
                  Edit
                </button>

                <FontAwesomeIcon
                  onClick={() => onDelete(_id)}
                  icon={faTrashAlt}
                  className="delete-icon h-5 text-red-600 px-2"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
