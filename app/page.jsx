"use client";
import Dashboard from "@/page/dashboard";
import configureStore from "@/store/configureStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={configureStore}>
      <div className="px-6">
        {/* Home page */}
        <Dashboard />
      </div>
    </Provider>
  );
}
