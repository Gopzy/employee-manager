"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#6C00EF] px-8 py-3">
      <Link className="text-white font-semibold" href={"/employee/list"}>
        Employee Manager
      </Link>
    </nav>
  );
};

export default NavBar;
