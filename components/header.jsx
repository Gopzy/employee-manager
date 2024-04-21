"use client";
import Link from "next/link";
import React, { Component } from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-8 py-3">
      <Link className="text-white font-semibold" href={"/employee/list"}>
        Employee Manager
      </Link>
      {/* <Link href={"/addemployee"}>Add employee</Link> */}
    </nav>
  );
};

export default Header;
