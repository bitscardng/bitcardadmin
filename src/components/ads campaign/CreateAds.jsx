import React from "react";
import { styles } from "../../styles";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { BiCopy, BiDownload } from "react-icons/bi";
import qr from "../../assets/qrcode.png";

const CreateAds = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-fit">
        <div className="flex flex-col items-center p-10 rounded-lg bg-sec w-fit">
          <p className={`${styles.topic} mb-0`}>Create campaign</p>
          <div className="flex items-center justify-between gap-10 m-2">
            <div className="w-full gap-4 my-4 text-center">
              <p>Campaign Name</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
            <div className="w-full gap-4 my-4 text-center">
              <p>URL LINK</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10 m-2">
            <div className="w-full gap-4 my-4 text-center">
              <p>Source (Optional)</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
            <div className="w-full gap-4 my-4 text-center">
              <p>Medium (Optional)</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
          </div>
          <div className="flex items-center p-4 ">
            <button className="flex items-center justify-between  p-2 m-2 duration-300 rounded-full bg-[#7B61FF] hover:text-xl w-36">
              Create Ads <FaPlus className="text-xl text-sec" />
            </button>
            <button className="flex items-center justify-between p-2 m-2 duration-300 bg-red-500 rounded-full hover:text-xl w-36">
              Delete <FaRegTrashAlt className="text-xl text-sec" />
            </button>
          </div>
        </div>
        <div className="w-full p-6 mt-8 text-center rounded-lg bg-sec">
          <p>Track Link</p>
          <div className="flex items-center justify-center gap-6">
            <input
              type="text"
              placeholder="http://btly.com/fghfj"
              className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
            />
            <div className="flex items-center justify-center gap-2 duration-300 cursor-pointer hover:text-lg">
              <div className="p-2 text-green-300 rounded-full glass">
                <BiCopy size={20} />
              </div>
              <p>copy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-fit">
        <div className="flex flex-col items-center w-full p-6 rounded-lg bg-sec">
          <p className={`${styles.topic} mb-0`}>Create QR campaign</p>
          <div className="flex flex-col items-center justify-between gap-10 m-2">
            <div className="w-full my-1 text-center">
              <p>Campaign Name</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
            <div className="w-full my-1 text-center">
              <p>URL LINK</p>
              <input
                type="text"
                className="w-full px-2 py-2 my-2 rounded-full outline-none bg-primary"
              />
            </div>
            <button className="flex items-center justify-between  p-2 m-2 duration-300 rounded-full bg-[#7B61FF] hover:text-xl w-36">
              Create Ads <FaPlus className="text-xl text-sec" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 p-3 mt-4 place-items-baseline">
          <img src={qr} alt="barcode" className="w-40 rounded-lg" />
          <div className="flex flex-col items-center duration-300 hover:text-lg w-fit">
            <a href={qr} download="bitscard download barcode">
              <div className="p-1 text-green-700 bg-green-200 rounded-lg w-fit">
                <BiDownload size={32} />
              </div>
              <p>Download</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
