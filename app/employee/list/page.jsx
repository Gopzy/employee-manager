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

  const handleDelete = (id) => {
    dispatch(deleteEmployees(id, () => dispatch(getEmployees())));
  };

  const renderEmployeeGrid = (data) => {
    return (
      <EmployeeGrid
        employeeData={data}
        onDelete={handleDelete}
        onEdit={(id) => router.push(`/employee/edit?id=${id}`)}
      />
    );
  };

  return (
    <div className="px-6">
      <ButtonHeader
        onAddClick={() => router.push("/employee/add")}
        onToggleClick={() => setIsGrid(!isGrid)}
        grid={isGrid}
      />
      <div
        className={
          isGrid
            ? "grid lg:grid-cols-5 grid-cols-3 gap-8 py-4 items-center justify-center align-middle"
            : "flex py-10 px-40"
        }
      >
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
