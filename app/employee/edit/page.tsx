"use client";
import EmployeeForm from "@/components/form";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = ({ route }) => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id")!;

  return (
    <div>
      {/* Edit page */}
      <EmployeeForm employeeId={id} />
    </div>
  );
};

export default page;
