import React, { useState } from "react";
import {
  BsRobot,
  BsChevronDown,
  BsSearch,
  BsArrowLeftCircle,
} from "react-icons/bs";
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
    <section className="flex w-full h-[100vh]">
      <div
        className={` mr-2  ${open ? "w-60" : "w-20"} relative duration-700 `}
      >
        {activeSearch && (
          <div className="absolute z-10 flex items-center justify-between w-full bg-active">
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

        <div
          className={` border-b border-r rounded-br-3xl border-sec
          ${open ? "w-60" : "w-20"} 
          relative duration-700 `}
        >
          <div className="sticky flex items-center justify-between gap-4 p-3 text-lg duration-300 bg-sec">
            <div
              className="duration-300 cursor-pointer"
              onClick={() => {
                setActiveSearch(true);
                setOpen(true);
              }}
            >
              <BsSearch className="" />
            </div>
            <div
              className={`cursor-pointer duration-300 rounded-full bg-primary text-active text-2xl ${
                !open && "rotate-180"
              }
              `}
              onClick={() => setOpen(!open)}
            >
              <BsArrowLeftCircle className="" />
            </div>
          </div>

          <div className={`mt-3 pr-2 relative  h-[94vh] overflow-y-scroll noscroll`}>
            <ul className="capitalize ">
              {menus
                .filter((menu) => {
                  return search.toLowerCase() === ""
                    ? menu
                    : menu.name.toLowerCase().includes(search);
                })
                .map((menu, index) => (
                  <Link to={menu.link} key={index}>
                    <li className="relative flex items-center justify-center p-2 group">
                      <div
                        className={`flex items-center justify-between p-3 my-1 w-full max-h-14 rounded-full hover:bg-active group ${
                          active === menu.name ? "bg-active" : "bg-sec"
                        } `}
                        onClick={() => setActive(menu.name)}
                      >
                        <div className="p-2 text-center rounded-full bg-[#3b3a62] ">
                          <BsRobot className="text-[#767DFF]" />
                        </div>

                        <div
                          className={` duration-500 ${
                            !open && "opacity-0 translate-x-28 overflow-hidden"
                          }`}
                          style={{
                            transitionDelay: `${index + 3}00ms`,
                          }}
                        >
                          <p className={`duration-500`}>{menu.name}</p>
                        </div>

                        {menu.count && (
                          <div
                            className={`  ${
                              !open && "hidden"
                            }  w-[32px] p-1 rounded-full bg-[#ED1E79] 
                    text-white text-center left-[200px] -top-1 absolute`}
                          >
                            {menu.count}
                          </div>
                        )}

                        {menu.count && (
                          <div
                            className={`  ${
                              open && "hidden"
                            } w-6 -mt-14 ml-6 absolute rounded-full bg-[#ED1E79] 
                    text-white text-center duration-1000`}
                          >
                            {menu.count}
                          </div>
                        )}

                        {menu.subMenu && open && (
                          <BsChevronDown
                            className={`${
                              subMenuOpen && "rotate-180 duration-300"
                            }`}
                            onClick={() => setSubMenuOpen(!subMenuOpen)}
                          />
                        )}
                      </div>

                      {/*title hover design below */}
                      <span
                        className={`
                      ${open && "hidden"}   
                          absolute left-48 bg-active font-semibold capitalize z-10
                      whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
                      group-hover:px-2 group-hover:py-1 group-hover:left-0 group-hover:duration-300 group-hover:w-fit`}
                      >
                        {menu.name}
                      </span>
                    </li>

                    <div>
                      {menu.subMenu && subMenuOpen && open && (
                        <ul
                          className="flex flex-col items-center justify-center m-4 mx-8 duration-700 border rounded-3xl "
                          style={{
                            transitionDelay: `${index + 3}00ms`,
                          }}
                        >
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
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 h-screen overflow-scroll ">{children}</div>
    </section>
  );
};

export default Sidebar;
