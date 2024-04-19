"use client";
import EmployeesPage from "@/page/dashboard";
import configureStore from "@/store/configureStore";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={configureStore}>
      <div>
        Home page
        <EmployeesPage />
      </div>
    </Provider>
  );
}
