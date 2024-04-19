"use client";
import React, { useState, useEffect } from "react";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log("response data::", data);
        setEmployees(data);
      })
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/employees/${id}`, {
        method: "DELETE",
      });
      // Update state to reflect deletion
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      {/* <h1>Employee Data</h1> */}
      <ul>
        {employees.map((employee) => (
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
