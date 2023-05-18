import React from "react";
import { BsRobot } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import menu from "../constant/sideBar"

const Sidebar = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="max-h-screen w-[240px] relative">
        <div className="inline-flex">
          <div className="w[174px] flex gap-1 p-2 px-10 bg-sec m-4 rounded-full items-center text-center">
            <img src={logo} alt="bitcard" />
            <p> BITCARD</p>
          </div>
        </div>
        <div>
          <ul className="relative flex flex-col h-screen overflow-y-scroll">
            {menu.map((menu, index) => (
              <Link to={menu.link} key={index}>
                <li key={index}>
                  <div className="relative">
                    <div className="w-[32px] p-1 rounded-full bg-[#ED1E79] text-white text-center left-48 -top-6 absolute">
                      {menu.amount}
                    </div>
                    <div className="w[174px] flex gap-2 p-5 bg-sec hover:bg-[#F09654] m-4 rounded-full justify-between items-center text-center duration-500">
                      <div className="p-2 text-center rounded-full bg-[]">
                        <BsRobot className="text-[#767DFF]" />
                      </div>
                      <div className="overflow-x-scroll capitalize">{menu.name}</div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-scroll">{children}</div>
    </div>
  );
};

export default Sidebar;
