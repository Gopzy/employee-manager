import React from "react";

const BtnCircle = ({ title, onClick, type, btnStyle, icon, testID }) => {
  return (
    <button
      testID="test-btn"
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
