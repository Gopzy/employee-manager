"use client";
import EmployeeGrid from "@/components/employeeGrid";
import EmployeeTable from "@/components/employeeTable";
import { deleteEmployees, getEmployees } from "@/store/action/employeeAction";
import { useRouter } from "@/node_modules/next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonHeader from "@/components/button";
// import "../../app/globals.css";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isGrid, setIsGrid] = useState(true);

  const { employeeData } = useSelector((state) => state?.employees) || [];

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

  return (
    <div className="px-6">
      <ButtonHeader
        onAddClick={() => router.push("/employee/add")}
        onToggleClick={() => setIsGrid(!isGrid)}
        grid={isGrid}
      />
      <div className="grid grid-cols-5 gap-4 py-4">
        {isGrid ? (
          employeeData.map((employee) => renderEmployeeGrid(employee))
        ) : (
          <EmployeeTable employees={employeeData} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default page;
