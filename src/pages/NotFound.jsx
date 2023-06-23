import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "../components";
import { logo } from "../assets";

const NotFound = () => {
  return (
    <div className="h-screen ">
      <div className="sticky top-0 flex items-center justify-between w-full p-4 mb-4 text-2xl text-center bg-sec">
        <div className="flex items-center gap-2 p-1 text-center rounded-full bg-sec">
          <img src={logo} alt="bitcard" />
          <p> BITCARD</p>
        </div>
        <DateTime />
      </div>
      <div className="items-center justify-center hero">
        <Link to="/dashboard">
          <p></p>
        </Link>
        <h1 className="text-5xl font-bold">404 page</h1>
      </div>
    </div>
  );
};

export default NotFound;
