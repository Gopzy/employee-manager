"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { schema } from "./form/validation";
import { Formik, Form, useFormik } from "formik";
import { FormFields, initialFormData } from "../constants/index";
import FormItem from "../components/form/formItem";
import BtnCircle from "./button/btnCircle";

const EmployeeForm = ({ employeeId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormData);

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

  const handleSubmit = (e) => {
    // e.preventDefault();
    const updatePayload = { id: employeeId, requestParams: formData };

    dispatch(
      employeeId
        ? updateEmployees(updatePayload, () => router.push("/employee/list"))
        : addEmployees(formData, () => router.push("/employee/list"))
    );
  };

  const renderFormItems = (formData, errors, touched) => {
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
      validateOnBlur={true}
      // validateOnChange={true}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <div className=" flex flex-col  items-center  ">
          <Form className=" max-w-[500px] border-2 rounded-3xl p-10">
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
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EmployeeForm;
