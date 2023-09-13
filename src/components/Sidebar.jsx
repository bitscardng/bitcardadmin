import React, { useState } from "react";
import {
  BsRobot,
  BsChevronDown,
  BsSearch,
  BsArrowLeftCircle,
} from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import menus from "../constant/sideBar";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [fillNum, setFillNum] = useState(false);
  const [active, setActive] = useState("");
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <div className="h-screen w-[240px] mr-2 relative">
        <div className="flex flex-col">
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
          <div className="flex items-center justify-between p-2 px-5 py-3 text-lg duration-300 bg-sec">
            <div
              className="duration-300 cursor-pointer"
              onClick={() => {
                setActiveSearch(true);
              }}
            >
              <BsSearch className="" />
            </div>
            <div>
              <BsArrowLeftCircle className="" />
            </div>
          </div>
        </div>

        {activeSearch && (
          <div className="absolute flex items-center justify-between w-full -mt-[44px] bg-active">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full py-2 pl-2 border-b outline-none bg-primary "
            />
            <button
              onClick={() => {
                setActiveSearch(false);
              }}
              type="submit"
              className="p-2 cursor-pointer hover:text-primary"
            >
              <FaTimes className="text-lg " />
            </button>
          </div>
        )}

        <div className="mt-3 border-b border-r rounded-br-3xl border-sec">
          <ul className="relative flex flex-col overflow-y-scroll h-[83vh]">
            {menus
              .filter((menu) => {
                return search.toLowerCase() === ""
                  ? menu
                  : menu.name.toLowerCase().includes(search);
              })
              .map((menu, index) => (
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
                        <span className={`${open && "hidden"}`}>
                          {menu.name}
                        </span>
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
