import React from "react";
import { render } from "@testing-library/react";
import Link from "next/link";
import NavBar from "../components/navBar";

describe("NavBar", () => {
  test("renders link correctly", () => {
    const { getByText } = render(<NavBar />);
    const linkElement = getByText("Employee Manager");
    expect(linkElement).toBeTruthy();
  });

  //   test("link points to correct URL", () => {
  //     const { getByText } = render(<NavBar />);
  //     const linkElement = getByText("Employee Manager");
  //     expect(linkElement).toHaveAttribute("href", "/employee/list");
  //   });
});
