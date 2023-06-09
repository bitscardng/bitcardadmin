import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const menu = [
  { title: "all activies", num: "67" },
  { title: "unassigned", num: "34" },
  { title: "today's mail", num: "45" },
  { title: "due ticket", num: "90" },
  { title: "unresolved", num: "90" },
  { title: "awaiting", num: "91" },
  { title: "resolved", num: "37" },
  { title: "spam", num: "" },
];

const ticketBar = [
  { title: "all activies", num: "67" },
  { title: "unassigned", num: "34" },
  { title: "today's mail", num: "45" },
  { title: "due ticket", num: "90" },
  { title: "unresolved", num: "90" },
  { title: "awaiting", num: "91" },
  { title: "resolved", num: "37" },
];

const Ticketing = ({ children }) => {
  const [active, setActive] = useState("");
  return (
    <div>
      <p className={`${styles.topic} mb-0`}>ticketing</p>
      <div className="flex items-center mt-6 justify-evenly">
        {ticketBar.map((data, i) => {
          return (
            <div className="h-full text-xl text-center bg-[#6C6AEB] w-full m-[1px] flex flex-col p-2 gap-2 justify-center items-center">
              <p className="capitalize font-extralight">{data.title}</p>
              <p className="text-5xl ">{data.num}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p
          className={`${styles.topic} text-start mt-10 font-light m-0 bg-sec p-2 w-fit rounded-full`}
        >
          views & categories
        </p>
        <div className="flex gap-4 mt-6">
          <ul className="relative flex flex-col w-40 pt-2 rounded-2xl bg-sec ">
            {menu.map((menu, index) => (
              <li className="relative my-3 ml-2 font-light">
                <Link to={`/ticketing/${menu.title}`} key={index}>
                  <div
                    className={`w-[32px] p-1 rounded-full bg-[#ED1E79] 
                    text-white text-center left-28 -top-4 absolute font-thin`}
                  >
                    {menu.num}
                  </div>
                  <div
                    className={`${
                      active === menu.title ? "bg-active" : "bg-[#6C6AEB]"
                    } p-2 hover:bg-active rounded-tl-2xl rounded-br-2xl
                        text-start duration-500 m-1 w-32`}
                    onClick={() => setActive(menu.title)}
                  >
                    <div className="capitalize ">{menu.title}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1 w-full overflow-y-scroll h-[68vh] bg-sec rounded-2xl px-2 font-thin my-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
