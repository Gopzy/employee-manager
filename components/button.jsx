import React from "react";

const ButtonHeader = ({ onAddClick, onToggleClick, grid }) => {
  return (
    <div className="flex justify-end gap-4 ">
      <button
        onClick={onAddClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add Employee
      </button>
      <button
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white focus:outline-none"
        onClick={onToggleClick}
      >
        {grid ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ButtonHeader;
