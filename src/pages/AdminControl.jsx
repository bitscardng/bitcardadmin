import React, { useState } from "react";
import { styles } from "../styles";
import { FiUser, FiArrowDownCircle } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpen } from "react-icons/bi";

const datas = [
  { name: "User 1" },
  { name: "User 2" },
  { name: "User 3" },
  { name: "User 4" },
];
const denomination = [
  { id: "rad01", name: "Admin" },
  { id: "rad02", name: "Customer Rep" },
];
const AdminControl = (handleInputChange) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [users, setUsers] = useState("");

  return (
    <div className="">
      <p className={`${styles.topic}`}>admin control</p>
      <div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Username</p>
          </div>
          <input
            type="name"
            required
            placeholder="John Doe"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <HiOutlineMail className="text-[#5ec88f]" />
            </div>
            <p className="flex">Email</p>
          </div>
          <input
            type="email"
            required
            placeholder="example@.abc"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <BiLockOpen className="text-[#767DFF]" />
            </div>
            <p className="">Password</p>
          </div>
          <input
            type="name"
            required
            placeholder="********"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div
          className={`${styles.formField} cursor-pointer flex-row flex justify-between py-3`}
          onClick={() => setOpen(!open)}
          onChange={handleInputChange}
        >
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p
            className={`text-white text-start ${!selected && "text-[#9CA3AF]"}`}
          >
            {selected ? selected : "Select Category"}
          </p>
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiArrowDownCircle
              className={` text-[#f7931a] duration-1000 text-[20px] ${
                open && "rotate-180 text-white"
              }`}
            />
          </div>
        </div>
        {/* category lists */}
        <div className="hero">
          <ul
            className={`p-2 overflow-y-auto rounded-xl w-72 bg-sec ${
              open ? "h-40" : "hidden"
            }`}
          >
            {datas.map((data, index) => {
              return (
                <li
                  className={`w-full p-2 m-1 hover:bg-active text-[#9CA3AF] hover:text-white duration-500 cursor-pointer rounded-xl`}
                  onClick={() => {
                    if (data?.name) {
                      setSelected(data?.name);
                      setOpen(false);
                    }
                  }}
                >
                  {data?.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex">
        {denomination.map((item, i) => {
          return (
            <div
              className={`flex items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
            >
              <input
                type="radio"
                name="users"
                id={item.id}
                value={item.name}
                className="radio text-sec peer"
                onChange={(e) => setUsers(e.target.value)}
              />
              <label
                for={item.id}
                className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className={`${styles.btn}`}>Create users</div>
    </div>
  );
};

export default AdminControl;
