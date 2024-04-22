"use client";
import Link from "next/link";
import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-8 py-3">
      <Link className="text-white font-semibold" href={"/employee/list"}>
        Employee Manager
      </Link>
    </nav>
  );
};

export default NavBar;
