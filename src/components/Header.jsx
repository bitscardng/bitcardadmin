import React from "react";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex justify-between w-full py-4 pr-3 bg-primary">
      <div className="flex justify-between w-full p-4 mr-3 rounded-full bg-sec">
        <p>
          Today on Bitscard {"May"} {"15"}, {"2023"} {"2:22"} {"PM"}
        </p>
        <div>
          <p>
            {"Super admin"}
            <div></div>
          </p>
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
