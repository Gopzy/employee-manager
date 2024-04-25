import React, { MouseEventHandler } from "react";

const BtnCircle = ({
  title,
  onClick,
  type,
  btnStyle,
  icon,
}: {
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  btnStyle?: any;
  icon?: any;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        btnStyle ? btnStyle : "text-white font-bold "
      }   " flex justify-center items-center "`}
    >
      {title ? title : null}
      {icon ? icon : null}
    </button>
  );
};

export default BtnCircle;
