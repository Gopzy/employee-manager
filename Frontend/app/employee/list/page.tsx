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
import ButtonHeader from "@/components/ButtonHeader";
import { employeeDataType, Reducers } from "@/types/types";
// import "../../app/globals.css";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employeeData, gridView } = useSelector(
    (state: Reducers) => state?.employees
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      dispatch(deleteEmployees(id, () => dispatch(getEmployees())));
    }
  };

  const handleEdit = (id) => router.push(`/employee/edit?id=${id}`);

  const handleToggle = () => dispatch(setGridView(!gridView));

  const renderEmployees = () => {
    if (gridView)
      return employeeData.map((employee: employeeDataType) => (
        <EmployeeGridItem
          employeeData={employee}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ));
    return (
      <EmployeeTable
        employees={employeeData}
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
            ? "flex flex-row flex-wrap gap-5 pt-5 px-20"
            : "flex py-10 px-40"
        }
      >
        {renderEmployees()}
      </div>
    </div>
  );
};

export default page;
