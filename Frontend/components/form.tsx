"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { schema } from "./form/validation";
import { Formik, Form, useFormik } from "formik";
import { FormFields, initialFormData } from "../constants/index";
import FormItem from "./form/formItem";
import BtnCircle from "./button/btnCircle";
import { employeeDataType, formDataType, Reducers } from "@/types/types";

const EmployeeForm = ({ employeeId }: { employeeId?: string }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<employeeDataType>(initialFormData);

  const { employeeData } = useSelector((state: Reducers) => state?.employees);

  const editEmployeeObj = employeeData?.filter(
    (employee) => employee._id === employeeId
  );

  const navigateEmployeeList = () => router.push("/employee/list");

  useEffect(() => {
    if (editEmployeeObj.length) {
      setFormData(editEmployeeObj?.[0]);
    }
  }, []);

  const onChangeFormValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const updatePayload = { id: employeeId, requestParams: formData };

    dispatch(
      employeeId
        ? updateEmployees(updatePayload, navigateEmployeeList)
        : addEmployees(formData, navigateEmployeeList)
    );
  };

  const renderFormItems = (formData: formDataType, errors: {}, touched: {}) => {
    return (
      <FormItem
        data={formData}
        onChange={onChangeFormValue}
        errors={errors}
        touched={touched}
      />
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <div className=" flex flex-col  items-center  ">
          <Form className=" max-w-[500px] border-2 rounded-3xl p-5">
            <div className="flex justify-end">
              <BtnCircle
                title="List View"
                onClick={navigateEmployeeList}
                btnStyle=" bg-[#6C00EF] hover:bg-blue-700 py-2 px-8  text-white rounded-full mb-5 "
              />
            </div>
            <div className="px-8 py-3">
              {FormFields.map((formData) =>
                renderFormItems(formData, errors, touched)
              )}

              <div className="flex justify-end">
                <BtnCircle
                  type="submit"
                  title={employeeId ? "Save" : "Add"}
                  btnStyle="border-[#6C00EF] text-[#6C00EF] px-10 mt-5  p-2 rounded border-2  "
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EmployeeForm;
