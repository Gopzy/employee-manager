"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const defaultFormObj = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
  gender: "",
  _id: null,
  // id: 4,
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
};

const EmployeeForm = ({ employeeId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultFormObj);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  const editEmployeeObj = employeeData?.filter(
    (employee) => employee._id === employeeId
  );
  // console.log("EmployeeForm :::::::", formData, editEmployeeObj?.[0]);

  useEffect(() => {
    if (editEmployeeObj.length) {
      setFormData(editEmployeeObj?.[0]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("handleSubmit :::::", formData);

    const updatePayload = { id: employeeId, requestParams: formData };

    dispatch(
      employeeId
        ? updateEmployees(updatePayload, () =>
            alert("Employee updated successfully!")
          )
        : addEmployees(formData, () => alert("Employee created successfully!"))
    );
  };

  // const { first_name, last_name, email, number, gender } = formData;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <br />
          <input
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              //   width: "100%",
              boxSizing: "border-box",
            }}
            type="text"
            name="first_name"
            value={formData?.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              //   width: "100%",
              boxSizing: "border-box",
            }}
            type="text"
            name="last_name"
            value={formData?.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              //   width: "100%",
              boxSizing: "border-box",
            }}
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number:
          <br />
          <input
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              //   width: "100%",
              boxSizing: "border-box",
            }}
            type="text"
            name="number"
            value={formData?.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <br />
          <input
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              //   width: "100%",
              boxSizing: "border-box",
            }}
            type="text"
            name="gender"
            value={formData?.gender}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className=" bg-slate-500" type="submit">
          Create
          <br />
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
