import React, { useState } from "react";
import { BsRobot } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import menu from "../constant/sideBar";

const Sidebar = ({ children }) => {
  const [active, setActive] = useState("");
  
  return (
    <div className="flex w-full h-screen">
      <div className="h-screen w-[240px] mr-2 relative">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="inline-flex"
        >
          <div className="flex items-center gap-2 p-1 px-10 m-4 text-center rounded-full bg-sec">
            <img src={logo} alt="bitcard" />
            <p> BITCARD</p>
          </div>
        </Link>
        <div>
          <ul className="relative flex flex-col overflow-y-scroll h-[83vh]">
            {menu.map((menu, index) => (
              <Link to={menu.link} key={index}>
                <li className="relative">
                  <div className={`w-[32px] p-1 rounded-full bg-[#ED1E79] text-white text-center left-48 -top-6 absolute`}>
                    {menu.count}
                  </div>
                  <div
                    className={`${
                      active === menu.name ? "bg-active" : "bg-sec"
                    } flex p-3 hover:bg-active m-4 rounded-full justify-between items-center text-center duration-500`}
                    onClick={() => setActive(menu.name)}
                  >
                    <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                      <BsRobot className="text-[#767DFF]" />
                    </div>
                    <div className="overflow-x-scroll capitalize">
                      {menu.name}
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 w-full h-screen overflow-y-scroll">{children}</div>
    </div>
  );
};

export default Sidebar;
