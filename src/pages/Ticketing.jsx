import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { useGetTicketStatsQuery } from "../api/ticketingQueries";

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

const Ticketing = ({ children }) => {
  const { data, isLoading } = useGetTicketStatsQuery();
  const [active, setActive] = useState("");
  return (
    <div>
      <p className={`${styles.topic} mb-0`}>ticketing</p>
      <div
        className={`grid grid-cols-6 justify-between items-center mx-auto mt-2 rounded-[25px] overflow-hidden gap-[0.2rem]`}
      >
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">unassigned</p>
          <p className="text-3xl ">
            {isLoading ? "..." : data?.data?.unassignedTickets}
          </p>
        </div>
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">Today’s Ticket</p>
          <p className="text-3xl ">
            {isLoading ? "..." : data?.data?.todaysTickets}
          </p>
        </div>
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">Due Ticket</p>
          <p className="text-3xl ">{isLoading ? "..." : data?.data?.dueDate}</p>
        </div>
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">Unresolved</p>
          <p className="text-3xl ">
            {isLoading ? "..." : data?.data?.unresolved}
          </p>
        </div>
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">Awaiting</p>
          <p className="text-3xl ">
            {isLoading ? "..." : data?.data?.awaiting}
          </p>
        </div>
        <div className="h-full text-xl text-center bg-[#6C6AEB] w-full flex flex-col  gap-1 justify-center items-center p-[5%]">
          <p className="capitalize font-extralight">Resolved</p>
          <p className="text-3xl ">
            {isLoading ? "..." : data?.data?.resolved}
          </p>
        </div>
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
          <div className="flex-1 w-full overflow-y-scroll h-[68vh] bg-sec rounded-2xl p-2 px-4 font-thin my-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
