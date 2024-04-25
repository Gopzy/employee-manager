import React, { MouseEventHandler } from "react";
import BtnCircle from "./button/btnCircle";
import MenuIcon from "./svg/menuIcon";

const ButtonHeader = ({
  onAddClick,
  onToggleClick,
  grid,
}: {
  onAddClick: MouseEventHandler<HTMLButtonElement>;
  onToggleClick: MouseEventHandler<HTMLButtonElement>;
  grid: boolean;
}) => {
  return (
    <div className="flex justify-end gap-4 pr-10 ">
      <BtnCircle
        title="Add Employee"
        onClick={onAddClick}
        btnStyle=" bg-[#6C00EF] hover:bg-blue-700 py-2 px-4  text-white rounded-full "
      />

      <BtnCircle
        onClick={onToggleClick}
        btnStyle="bg-[#6C00EF] hover:bg-blue-700 w-12 h-12 text-white  rounded-full "
        icon={
          grid ? (
            <MenuIcon
              className="h-6 w-6"
              pathDvalue="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          ) : (
            <MenuIcon
              className="h-6 w-6"
              pathDvalue="
        M3,3 h4 v4 h-4 v-4
        M10,3 h4 v4 h-4 v-4
        M17,3 h4 v4 h-4 v-4
        M3,10 h4 v4 h-4 v-4
        M10,10 h4 v4 h-4 v-4
        M17,10 h4 v4 h-4 v-4
        M3,17 h4 v4 h-4 v-4
        M10,17 h4 v4 h-4 v-4
        M17,17 h4 v4 h-4 v-4
      "
            />
          )
        }
      />
    </div>
  );
};

export default ButtonHeader;
