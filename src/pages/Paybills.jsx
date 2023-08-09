import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "data",
    link: "/data",
  },
  {
    title: "airtime",
    link: "/airtime",
  },
  {
    title: "bet",
    link: "/bet",
  },
  {
    title: "electricity",
    link: "/electricity",
  },
  {
    title: "cable",
    link: "/cable",
  },
];

const Paybills = ({ children }) => {
  const [active, setActive] = useState("");

  return (
    <div>
      <div className="flex text-center">
        {navLinks.map((nav, index) => (
          <div className="flex items-center w-full mx-2 capitalize" key={index}>
            <Link
              to={nav.link}
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

      <div className="flex-1 w-full min-h-[80vh] p-4 my-4 overflow-y-scroll bg-sec rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default Paybills;
