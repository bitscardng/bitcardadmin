import React from "react";
import { BsRobot } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import DateTime from "./DateTime";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex justify-between w-full py-4 pr-3 bg-primary">
      <div className="flex justify-between w-full p-4 mr-3 rounded-full bg-sec">
        <p>
          <DateTime />
        </p>
        <div className="flex items-center gap-1">
          <FiUser className="text-2xl font-bold text-active" />
          <p>{"Super admin"}</p>
        </div>
      </div>
      <Link className="flex items-center justify-between gap-2 p-3 duration-500 rounded-full hover:bg-active bg-sec">
        <div className="p-2 text-center rounded-full bg-[#3b3a62]">
          <BsRobot className="text-[#767DFF]" />
        </div>
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default Header;
