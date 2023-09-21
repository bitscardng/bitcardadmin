import React from "react";
import { BsRobot } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import DateTime from "./DateTime";
import logo from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../redux/reducers/auth.reducer";
import { useLazyLogoutQuery } from "../api/authQueries";

const Header = () => {
  const [logout] = useLazyLogoutQuery();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        localStorage.removeItem("refreshToken");
        sessionStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {
        navigate("/");
      });
  };

  return (
    <div className="sticky top-0 z-20 flex justify-between w-full py-4 pr-3 bg-primary">
      <Link to="/dashboard" className="inline-flex">
        <div className="flex items-center justify-center gap-2 p-1 mx-2 text-center rounded-full w-60 bg-sec">
          <img src={logo} alt="bitcard" />
          <p> BITCARD</p>
        </div>
      </Link>
      <div className="flex flex-row items-center justify-between w-full p-4 mr-3 rounded-full bg-sec">
        <p>
          <DateTime />
        </p>
        <div className="flex items-center gap-1">
          <FiUser className="text-2xl font-bold text-active" />
          Welcome, <p className="text-white capitalize"></p>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleLogout}
        className="flex items-center justify-between gap-2 p-3 duration-500 rounded-full hover:bg-active bg-sec min-w-fit"
      >
        <div className="p-2 text-center rounded-full bg-[#3b3a62] ">
          <BsRobot className="text-[#767DFF]" />
        </div>
        <p>Sign out</p>
      </button>
    </div>
  );
};

export default Header;
