import React from "react";
import { styles } from "../styles";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";

const CreateAds = () => {
  return (
    <div className="">
      <div className="items-center ">
        <p className={`${styles.topic} mb-0`}>Create campaign</p>
        <div className="flex items-center justify-around m-2">
          <div className=" w-[80%] gap-4  my-4">
            <p>Campaign Name</p>
            <input
              type="text"
              className="w-[80%] py-2 rounded-full my-2 bg-sec px-2 outline-none"
            />
          </div>
          <div className=" w-[80%] gap-4  my-4 ">
            <p>URL LINK</p>
            <input
              type="text"
              className="w-[80%] py-2 rounded-full my-2 bg-sec px-2 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-around m-2">
          <div className=" w-[80%] gap-4  my-4">
            <p>Source (Optional)</p>
            <input
              type="text"
              className="w-[80%] py-2 rounded-full my-2 bg-sec px-2 outline-none"
            />
          </div>
          <div className=" w-[80%] gap-4  my-4">
            <p>Medium (Optional)</p>
            <input
              type="text"
              className="w-[80%] py-2 rounded-full my-2 bg-sec px-2 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-around">
          <button className="flex items-center justify-between gap-2 p-2 px-6 m-2 duration-300 bg-green-400 rounded-full hover:text-xl w-fit">
            Create Ads <FaPlus className="text-xl text-sec" />
          </button>
          <button className="flex items-center justify-between gap-2 p-2 px-6 m-2 duration-300 bg-red-500 rounded-full hover:text-xl w-fit">
            Delete <FaRegTrashAlt className="text-xl text-sec" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
