import { render } from "@testing-library/react";
import RootLayout from "../app/layout";

describe("RootLayout", () => {
  //   test("renders NavBar component", () => {
  //     const { getByTestId, getByText } = render(<RootLayout />);
  //     const navBarElement = getByText("navbar");
  //     expect(navBarElement).toBeInTheDocument();
  //   });

  test("renders children components", () => {
    const ChildComponent = () => <div>Child Component</div>;
    const { getByText } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>
    );
    const childComponentElement = getByText("Child Component");
    expect(childComponentElement).toBeTruthy();
  });
});
