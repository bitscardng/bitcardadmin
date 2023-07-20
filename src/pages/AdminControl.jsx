import React, { useState } from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpen } from "react-icons/bi";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";

const denomination = [
  { id: "rad01", name: "Admin" },
  { id: "rad02", name: "Customer Rep" },
];
const AdminControl = () => {
  const [users, setUsers] = useState("");
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div className="">
      <p className={`${styles.topic}`}>admin control</p>
      <form>
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
        <div className="flex flex-col justify-center mt-6 text-center">
          <p className="text-2xl font-semibold">Select an option below</p>
          <div className="flex">
            {denomination.map((item, i) => {
              return (
                <div
                  className={`flex items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                >
                  <input
                    type="radio"
                    name="users"
                    required
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
        </div>
        <div className={`${styles.btn}`}>Create users</div>
      </form>
    </div>
  );
};

export default AdminControl;
