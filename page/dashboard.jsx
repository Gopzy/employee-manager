"use client";
import EmployeeGrid from "@/components/employeeGrid";
import EmployeeTable from "@/components/employeeTable";
import { deleteEmployees, getEmployees } from "@/store/action/employeeAction";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../app/globals.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  console.log("employee from redux::::::", employeeData, employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  // useEffect(() => {
  //   setEmployees(employeeData);
  // }, [employeeData]);

  const handleDelete = (id) => {
    dispatch(deleteEmployees(id, () => dispatch(getEmployees())));
  };

  const renderEmployeeGrid = (data) => {
    return <EmployeeGrid employeeData={data} onDelete={handleDelete} />;
  };

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div>
      <div className="flex justify-end gap-4 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Employee
        </button>
        <button
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white focus:outline-none"
          onClick={toggleGrid}
        >
          {isGrid ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 py-4">
        {/* {employeeData.map((employee) => renderEmployees(employee))} */}
        {isGrid ? (
          employeeData.map((employee) => renderEmployeeGrid(employee))
        ) : (
          <EmployeeTable employees={employeeData} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
