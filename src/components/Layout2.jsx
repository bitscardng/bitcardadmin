import React from "react";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { logo } from "../assets";

const Layout2 = ({ children }) => {
  return (
    <div className="">
      <div className="sticky top-0 z-20 flex items-center justify-between w-full p-2 bg-sec">
        <Link to="/">
          <div className="flex items-center px-2 rounded-full hover:text-active bg-primary">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl">Bitscard</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="flex items-center justify-between gap-2 p-3 duration-500 rounded-full hover:bg-active bg-primary"
          >
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <BsRobot className="text-[#767DFF]" />
            </div>
            <p>Dashboard</p>
          </Link>
          <Link
            to="/sign-in"
            className="flex items-center justify-between gap-2 p-3 duration-500 rounded-full hover:bg-active bg-primary"
          >
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <BsRobot className="text-[#767DFF]" />
            </div>
            <p>Sign In</p>
          </Link>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout2;
