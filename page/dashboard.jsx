"use client";
import getEmployees from "@/store/action/getEmployees";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  console.log("employee from redux::::::", employeeData);

  useEffect(() => {
    // fetchEmployees();
    dispatch(getEmployees());
  }, []);

  // const fetchEmployees = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/employees");
  //     setEmployees(response.data);
  //   } catch (error) {
  //     console.error("Error fetching employees:", error);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      // Update state to reflect deletion
      // setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      {/* <h1>Employee Data</h1> */}
      <ul>
        {employeeData.map((employee) => (
          <li key={employee?.id}>
            {employee?.first_name} - {employee?.last_name}
            <br />{" "}
            <button onClick={() => handleDelete(employee?._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesPage;
