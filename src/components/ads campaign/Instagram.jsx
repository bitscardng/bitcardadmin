import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import DateTime from "../DateTime";
import { MdBarChart, MdLocationOn } from "react-icons/md";
import { BsFillCreditCard2BackFill, BsPersonFill } from "react-icons/bs";

const Instagram = () => {
  const datas = [
    {
      icon: (
        <div className="text-green-400 ">
          <MdLocationOn />
        </div>
      ),
      title: "top location",
      country: "nigeria",
      span: "uk, usa",
    },
    {
      icon: (
        <div className="text-red-400">
          <BsFillCreditCard2BackFill />
        </div>
      ),
      title: "top referral",
      country: "Instagram",
      span: 2000,
    },
    {
      icon: (
        <div className="text-blue-500 ">
          <BsPersonFill />
        </div>
      ),
      title: "sign up / download",
      span: 230,
    },
  ];
  return (
    <div>
      <Link
        to="/ads-campaign"
        className="flex items-center gap-2 capitalize duration-300 hover:text-lg"
      >
        <span>
          <TiArrowBack />
        </span>
        <p className="btn-link">Ads Campaign</p>
      </Link>

      <div className="flex gap-6 m-4">
        <h1 className="p-2 px-4 rounded-full bg-purple">Instagram Download</h1>
        <h1 className="p-2 px-4 rounded-full bg-active">{"btly.com/GGJVS"}</h1>
      </div>

      <div></div>

      <div className="flex items-center justify-between w-full gap-4 mt-8 capitalize text-start">
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center justify-between w-full gap-4 p-4 rounded-3xl bg-sec">
            <p>total engagement</p> <span>{"2042"}</span>
            <MdBarChart />
          </div>
          <div className="justify-between w-full p-4 rounded-3xl bg-sec">
            <h2 className="mb-2 text-xl text-center uppercase text-active">
              Instagram download
            </h2>
            <DateTime />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full h-full rounded-3xl bg-sec">
          {datas.map((data, index) => (
            <div
              className="flex items-center justify-between w-full p-4"
              key={index}
            >
              <div className="text-3xl">{data.icon}</div>
              <h2>{data.title}</h2>
              <h3>
                {data.country}
                <span className="pl-2">{data.span}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
