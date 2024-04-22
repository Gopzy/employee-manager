import React from "react";

const EmployeeTable = ({ employees, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className=" bg-green-500">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Image
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            First Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Phone
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Gender
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {employees?.map((employeeData) => {
          const { photo, first_name, last_name, email, number, gender, _id } =
            employeeData;
          return (
            <tr key={_id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img className="h-8 w-8 rounded" src={photo} alt={first_name} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{first_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{last_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {email.substring(0, 15)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{number}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {gender === "F" ? "Female" : "Male"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
                <button
                  onClick={() => onDelete(_id)}
                  className="text-red-600 hover:text-red-900 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
