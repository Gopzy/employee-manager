"use client";
import React, { useState } from "react";
import { addEmployees } from "@/store/action/employeeAction";
import { useDispatch } from "react-redux";

const defaultFormObj = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
  gender: "",
  _id: null,
  // id: "4",
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
};

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultFormObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearFormData = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      gender: "",
      // id: "",
    });
  };

  const handleSubmit = () => {
    dispatch(
      addEmployees(formData, () => alert("Employee created successfully!"))
    );
  };

  const { first_name, last_name, email, number, gender } = formData;
  return (
    <div>
      {/* <h2>Create Employee</h2> */}
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
            value={first_name}
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
            value={last_name}
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
            value={email}
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
            value={number}
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
            value={gender}
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
