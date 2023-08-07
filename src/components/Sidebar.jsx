import React, { useState } from "react";
import { BsRobot, BsChevronDown } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import menu from "../constant/sideBar";

const Sidebar = ({ children }) => {
  const [fillNum, setFillNum] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <div className="h-screen w-[240px] mr-2 relative">
        <Link
          to="/dashboard"
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
              <div className="h-fit">
                <Link to={menu.link} key={index}>
                  <li className="relative">
                    {menu.count && (
                      <div
                        className={`w-[32px] p-1 rounded-full bg-[#ED1E79] 
                    text-white text-center left-48 -top-6 absolute`}
                      >
                        {menu.count}
                      </div>
                    )}
                    <div
                      className={`${
                        active === menu.name ? "bg-active" : "bg-sec"
                      } flex p-3 hover:bg-active m-4 rounded-full 
                    justify-between items-center text-center duration-500`}
                      onClick={() => setActive(menu.name)}
                    >
                      <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                        <BsRobot className="text-[#767DFF]" />
                      </div>
                      <div className="capitalize ">{menu.name}</div>
                      {/*title hover design below */}
                      <span className={`${open && "hidden"}`}>{menu.name}</span>
                      {menu.subMenu && open && (
                        <div onClick={() => setSubMenuOpen(!subMenuOpen)}>
                          <BsChevronDown
                            className={`${
                              subMenuOpen && "rotate-180"
                            } font-bold`}
                          />
                        </div>
                      )}
                    </div>
                  </li>

                  {/* Sub menu contain */}
                  <div>
                    {menu.subMenu && subMenuOpen && open && (
                      <ul className="flex flex-col items-center justify-center m-4 mx-8 border rounded-3xl">
                        {menu.subMenu.map((subMenu, index) => (
                          <Link to={subMenu.link} key={index}>
                            <li className="flex w-full p-2 px-8 m-1 cursor-pointer hover:bg-active hover:rounded-md">
                              {subMenu.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 w-full min-h-screen overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
