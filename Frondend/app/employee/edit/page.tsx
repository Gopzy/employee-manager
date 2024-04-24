"use client";
import EmployeeForm from "@/components/form";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id")!;

  return <EmployeeForm employeeId={id} />;
};

export default page;
