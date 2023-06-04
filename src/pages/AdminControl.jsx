import React from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {BiLockOpen} from "react-icons/bi";


const denomination = [
  { id: "rad01", value: "Admin" },
  { id: "rad02", value: "Customer Rep" },
];
const AdminControl = () => {
  return (
    <div>
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
        <div className={`${styles.formField}`}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="">Choose Rate :</p>
          </div>
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
                name=""
                id={item.id}
                value={item.id}
                className="radio text-sec"
              />
              <label
                for={item.id}
                className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec"
              >
                {item.value}
              </label>
            </div>
          );
        })}
      </div>
      <div className={`${styles.btn}`}> Create users</div>
    </div>
  );
};

export default AdminControl;
