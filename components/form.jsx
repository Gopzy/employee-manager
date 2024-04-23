"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FormValidation from "./formValidation";

const formObj = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
  gender: "M",
  _id: null,
  // id: 4,
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
};

const EmployeeForm = ({ employeeId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(formObj);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  const { first_name, last_name, email, number, gender } = formData;

  console.log({ isFormValid });

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

  useEffect(() => {
    FormValidation(formData, setErrors, setIsFormValid);
  }, [first_name, last_name, number, gender, email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatePayload = { id: employeeId, requestParams: formData };
    if (isFormValid) {
      dispatch(
        employeeId
          ? updateEmployees(updatePayload, () => router.push("/employee/list"))
          : addEmployees(formData, () => router.push("/employee/list"))
      );
    }
  };

  return (
    <div className=" px-7 ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 w-[480px] gap-0 items-center">
          <label>First Name:</label>
          <div>
            <input
              className={`${
                !errors.first_name
                  ? " border-b-2 border-gray-300"
                  : " border border-red-500"
              } bg-slate-200  py-2 px-4 mb-4 w-full text-gray-700 leading-tight focus:outline-none `}
              type="text"
              name="first_name"
              placeholder="First Name"
              value={first_name}
              onChange={onChangeFormValue}
            />
            {errors.first_name && (
              <p style={styles.error}>{errors.first_name}</p>
            )}
          </div>
          <label>Last Name:</label>
          <div>
            <input
              className={`${
                !errors.last_name
                  ? " border-b-2 border-gray-300"
                  : " border border-red-500"
              } bg-slate-200  py-2 px-4 mb-4 w-full text-gray-700 leading-tight focus:outline-none `}
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={last_name}
              onChange={onChangeFormValue}
            />
            {errors.last_name && <p style={styles.error}>{errors.last_name}</p>}
          </div>
          <label>Email:</label>
          <div>
            <input
              className={`${
                !errors.email
                  ? " border-b-2 border-gray-300"
                  : " border border-red-500"
              } bg-slate-200  py-2 px-4 mb-4 w-full text-gray-700 leading-tight focus:outline-none `}
              type="email"
              name="email"
              placeholder="someone@gmail.com"
              value={email}
              onChange={onChangeFormValue}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <label>Number:</label>
          <div>
            <input
              className={`${
                !errors.number
                  ? " border-b-2 border-gray-300"
                  : " border border-red-500"
              } bg-slate-200  py-2 px-4 mb-4 w-full text-gray-700 leading-tight focus:outline-none `}
              type="text"
              name="number"
              placeholder="+9477123123"
              value={number}
              onChange={onChangeFormValue}
            />
            {errors.number && <p style={styles.error}>{errors.number}</p>}
          </div>

          <label>Gender:</label>
          <div>
            <select
              name="gender"
              id="_id"
              value={gender}
              className=" bg-slate-200 border-b-2 border-gray-300 py-2 px-4 mb-4 w-full text-gray-700"
              onChange={onChangeFormValue}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {/* {errors.gender && <p style={styles.error}>{errors.gender}</p>} */}
          </div>
        </div>
        <button
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? "border-[#6C00EF] text-[#6C00EF]"
              : "border-gray-500 text-gray-500"
          } px-10 mt-5  p-2 rounded border-2`}
          type="submit"
        >
          {employeeId ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "6px",
  },
};

export default EmployeeForm;
