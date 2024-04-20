"use client";
import Employee from "@/components/employee";
import { deleteEmployees, getEmployees } from "@/store/action/employeeAction";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../app/globals.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]);

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

  const renderEmployees = (data) => {
    return <Employee employeeData={data} onDelete={handleDelete} />;
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {employeeData.map((employee) => renderEmployees(employee))}
      </div>
    </div>
  );
};

export default Dashboard;
