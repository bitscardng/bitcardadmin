import React, { useState } from "react";
import Search from "../components/Search";
import { FiUser, FiArrowDownCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import BuyGiftCardTable from "../components/antd/BuyGiftCardTable";

const BuyGiftCard = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className={`${styles.topic} mb-4`}>Buy gift card</p>
      <div className="flex flex-row items-center justify-between">
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="relative">
          <div
            className={`${styles.formField} cursor-pointer flex-row justify-between py-3`}
            onClick={() => setOpen(!open)}
          >
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className={`text-white`}>Create New Gift Card</p>
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiArrowDownCircle
                className={` text-[#f7931a] duration-1000 text-[20px] ${
                  open && "rotate-180 text-white"
                }`}
              />
            </div>
          </div>
          <div
            className={` absolute duration-500 ${
              open ? "h-fit z-[500]" : "hidden"
            }`}
          >
            <ul className={`p-2 rounded-2xl w-72 bg-sec text-center`}>
              <Link to="/giftcard/upload-buy">
                <p
                  className={`w-full p-2 my-1 hover:bg-active text-[#9CA3AF]  hover:text-white duration-500 cursor-pointer rounded-xl`}
                >
                  Upload
                </p>
              </Link>
              <Link to="/giftcard/add-buy">
                <p
                  className={`w-full p-2 my-1 hover:bg-active text-[#9CA3AF]  hover:text-white duration-500 cursor-pointer rounded-xl`}
                >
                  Add
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <BuyGiftCardTable />
    </div>
  );
};

export default BuyGiftCard;
