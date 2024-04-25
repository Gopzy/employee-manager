import React from "react";

const MenuIcon = ({
  className,
  pathDvalue,
}: {
  className: string;
  pathDvalue: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={pathDvalue}
      fill="white"
    />
  </svg>
);

export default MenuIcon;
