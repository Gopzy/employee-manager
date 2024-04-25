import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import EmployeeGridItem from "../components/employeeGrid";

describe("EmployeeGridItem", () => {
  const employeeData = {
    _id: "1",
    photo: "employee-photo-url",
    first_name: "John Doe",
    email: "john.doe@example.com",
    number: "1234567890",
    gender: "M",
  };

  test("renders employee data correctly", () => {
    const { getByText, getByAltText } = render(
      <EmployeeGridItem employeeData={employeeData} />
    );
    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("1234567890")).toBeTruthy();
    expect(getByText("Male")).toBeTruthy();
    expect(getByAltText("title")).toBeTruthy();
  });

  //   test("calls onDelete handler when delete button is clicked", () => {
  //     const onDelete = jest.fn();
  //     const { getByRole, getByText, getByTestId, getByTitle } = render(
  //       <EmployeeGridItem employeeData={employeeData} onDelete={onDelete} />
  //     );
  //     fireEvent.click(getByTestId("test-btn"));
  //     expect(onDelete).toHaveBeenCalledWith("1");
  //   });

  //   test('calls onEdit handler when edit button is clicked', () => {
  //     const onEdit = jest.fn();
  //     const { getByTestId } = render(
  //       <EmployeeGridItem employeeData={employeeData} onEdit={onEdit} />
  //     );
  //     fireEvent.click(getByTestId('edit-btn'));
  //     expect(onEdit).toHaveBeenCalledWith('1');
  //   });
});
