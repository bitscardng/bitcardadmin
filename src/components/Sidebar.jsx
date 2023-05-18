import React from "react";
import { BsRobot } from "react-icons/bs";
import logo from "../assets/logo.png";

const Sidebar = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="h-screen w-[223px] mr-8 relative">
        <div className="inline-flex">
          <div className="w[174px] flex gap-1 p-2 px-8 bg-sec m-4 rounded-full items-center text-center">
            <img src={logo} alt="bitcard" />
            <p> BITCARD</p>
          </div>
        </div>
        <div className={``}>
          <ul className="relative flex flex-col pr-2 mt-1 overflow-y-scroll">
            <li>
              <div className="relative">
                <div className="w-[32px] p-1 rounded-full bg-[#ED1E79] text-white text-center left-44 -top-2 absolute">
                  {"5"}
                </div>
                <div className="w[174px] flex gap-2 p-5 bg-sec hover:bg-[#F09654] m-4 rounded-full justify-center items-center text-center">
                  <div className="p-2 text-center rounded-full bg-[]">
                    <BsRobot className="text-[#767DFF]" />
                  </div>
                  {"P2P Tranx"}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-scroll">{children}</div>
    </div>
  );
};

export default Sidebar;
