import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BtnCircle from "../components/button/btnCircle";

describe("BtnCircle", () => {
  test("renders with title", () => {
    const { getByText } = render(<BtnCircle title="Test Button" />);
    expect(getByText("Test Button")).toBeTruthy();
  });

  test("renders with icon", () => {
    const { getByTestId } = render(
      <BtnCircle icon={<div data-testid="test-icon" />} />
    );
    expect(getByTestId("test-icon")).toBeTruthy();
  });

  test("calls onClick  function", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<BtnCircle onClick={onClick} />);
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
