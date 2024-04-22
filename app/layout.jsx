"use client";
import NavBar from "@/components/navBar";
import configureStore from "@/store/configureStore";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={configureStore}>
      <html lang="en">
        <body className={inter.className}>
          <div className="max-w-full  px-6 py-4">
            <NavBar />
          </div>
          {children}
        </body>
      </html>
    </Provider>
  );
}
