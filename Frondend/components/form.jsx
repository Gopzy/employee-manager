"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { schema } from "./form/formValidation";
import { Formik, Form, useFormik } from "formik";
import { FormFields, FormObj } from "../constants/index";
import FormItem from "../components/form/formItem";

const EmployeeForm = ({ employeeId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(FormObj);
  const [isFormValid, setIsFormValid] = useState(true);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  const editEmployeeObj = employeeData?.filter(
    (employee) => employee._id === employeeId
  );

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

  console.log({ formData });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const updatePayload = { id: employeeId, requestParams: formData };

    dispatch(
      employeeId
        ? updateEmployees(updatePayload, () => router.push("/employee/list"))
        : addEmployees(formData, () => router.push("/employee/list"))
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={schema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <div className=" flex flex-col  items-center  ">
          <Form className=" max-w-[500px] border-2 rounded-3xl p-10">
            {FormFields.map((formData) => (
              <FormItem
                data={formData}
                onChange={onChangeFormValue}
                errors={errors}
                touched={touched}
              />
            ))}

            <div className="flex justify-end">
              <button
                // disabled={!isFormValid}
                className={`${
                  isFormValid
                    ? "border-[#6C00EF] text-[#6C00EF]"
                    : "border-gray-500 text-gray-500"
                }  px-10 mt-5  p-2 rounded border-2 `}
                type="submit"
              >
                {employeeId ? "Save" : "Add"}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EmployeeForm;
