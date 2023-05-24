import React from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpen } from "react-icons/bi";

const Faq = () => {
  return (
    <div>
      <div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Title</p>
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
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Image</p>
          </div>
          <input
            type="file"
            required
            className="w-full p-2 mx-1 bg-transparent outline-none"
          ></input>
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Category</p>
          </div>
          <input
            type="text"
            required
            placeholder="Category"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        {/* <div className={`${styles.formField} rounded-2xl`}>
          <div className="flex flex-row gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <div className="h-44">
              <input
                type="text"
                required
                placeholder="Content"
                className="w-full p-2 mx-1 bg-transparent outline-none"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Faq;
