"use client";
import React, { useState } from "react";
import { addEmployees, updateEmployees } from "@/store/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Validation from "./validation";

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
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultFormObj);

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const { employeeData } = useSelector((state) => state?.employees) || [];

  const editEmployeeObj = employeeData?.filter(
    (employee) => employee._id === employeeId
  );

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

  const { first_name, last_name, email, number, gender } = formData;

  useEffect(() => {
    Validation(formData, setErrors, setIsFormValid);
  }, [first_name, last_name, number, gender, email]);

  const handleSubmit = () => {
    const updatePayload = { id: employeeId, requestParams: formData };
    if (isFormValid) {
      dispatch(
        employeeId
          ? updateEmployees(updatePayload, () =>
              alert("Employee updated successfully!")
            )
          : addEmployees(
              formData,
              () => alert("Employee created successfully!")
              // () => router.push("/employee/list")
            )
      );
    }
  };

  return (
    <div className=" px-7">
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
            placeholder="First Name"
            value={formData?.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p style={styles.error}>{errors.first_name}</p>}
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
            placeholder="Last Name"
            value={formData?.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p style={styles.error}>{errors.last_name}</p>}
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
            placeholder="someone@gmail.com"
            value={formData?.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
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
            placeholder="+9477123123"
            value={formData?.number}
            onChange={handleChange}
          />
          {errors.number && <p style={styles.error}>{errors.number}</p>}
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
            placeholder="M/F"
            value={formData?.gender}
            onChange={handleChange}
          />
          {errors.gender && <p style={styles.error}>{errors.gender}</p>}
        </label>
        <br />
        <button className=" bg-slate-500 px-5 mt-5 text-white" type="submit">
          {employeeId ? "Save" : "Add"}
          <br />
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
