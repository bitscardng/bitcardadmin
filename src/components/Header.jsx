import React from "react";
import { BsRobot } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import DateTime from "./DateTime";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/auth.actions";
import { selectUser } from "../redux/reducers/auth.reducer";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectUser).name;
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message || err.msg);
      });
  };

  return (
    <div className="sticky top-0 z-20 flex justify-between w-full py-4 pr-3 bg-primary">
      <div className="flex flex-row items-center justify-between w-full p-4 mr-3 rounded-full bg-sec">
        <p>
          <DateTime />
        </p>
        <div className="flex items-center gap-1">
          <FiUser className="text-2xl font-bold text-active" />
          Welcome, <p className="text-white capitalize">{name}</p>
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
