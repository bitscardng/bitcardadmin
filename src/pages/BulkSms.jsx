import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Bulk sms",
    link: "/bulk-sms",
  },
  {
    title: "personalized",
    link: "/personalized",
  },
  {
    title: "single",
    link: "/single",
  },
  {
    title: "delivery status",
    link: "/delivery-status",
  },
];

const BulkSms = ({ children }) => {
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

      <div className="flex-1 w-full p-4 my-4 overflow-y-scroll bg-sec rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default BulkSms;
