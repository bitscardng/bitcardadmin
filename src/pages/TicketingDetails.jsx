import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const navLinks = [
  {
    title: "reply",
  },
  {
    title: "forward",
  },
  {
    title: "resolved",
  },
  {
    title: "note*",
  },
];

const TicketingDetails = () => {
  const [active, setActive] = useState("");

  return (
    <div>
      <div className="relative mb-4">
        <Link
          to="/ticketing/all activies"
          className="absolute p-2 ml-2 rounded-full cursor-pointer bg-sec text-active hover:bg-active hover:text-sec"
        >
          <TiArrowBackOutline />
        </Link>
        <p className={`${styles.topic} mb-0 `}>ticket details</p>
      </div>
      <div>
        <div className="flex text-center bg-[#282C4A] p-2 rounded-full">
          {navLinks.map((nav, index) => (
            <div
              className="flex items-center w-full mx-2 capitalize "
              key={index}
            >
              <Link
                className={`${
                  active === nav.title ? "bg-active" : "bg-purple"
                } w-full p-2 rounded-full hover:bg-active duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="bg-white round-full">
          <div>
            <h1></h1>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketingDetails;
