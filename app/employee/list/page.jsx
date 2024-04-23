"use client";
import EmployeeGridItem from "@/components/employeeGrid";
import EmployeeTable from "@/components/employeeTable";
import {
  deleteEmployees,
  getEmployees,
  setGridView,
} from "@/store/action/employeeAction";
import { useRouter } from "@/node_modules/next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonHeader from "@/components/button";
// import "../../app/globals.css";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employeeData, gridView } =
    useSelector((state) => state?.employees) || [];

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEmployees(id, () => dispatch(getEmployees())));
    // const isConfirmed = window.confirm("Are you sure you want to delete?");
    // if (isConfirmed) {
    //   dispatch(deleteEmployees(id, () => dispatch(getEmployees())));
    // }
  };

  const handleEdit = (id) => router.push(`/employee/edit?id=${id}`);

  const handleToggle = () => dispatch(setGridView(!gridView));

  const renderEmployeeGrid = (data) => {
    return (
      <EmployeeGridItem
        employeeData={data}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    );
  };

  return (
    <div className="px-6">
      <ButtonHeader
        onAddClick={() => router.push("/employee/add")}
        onToggleClick={handleToggle}
        grid={gridView}
      />
      <div
        className={
          gridView
            ? " px-20 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-8 py-4 items-center justify-center align-middle"
            : "flex py-10 px-40"
        }
      >
        {gridView ? (
          employeeData.map((employee) => renderEmployeeGrid(employee))
        ) : (
          <EmployeeTable
            employees={employeeData}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
};

export default page;
