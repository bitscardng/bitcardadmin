import React from "react";
import { styles } from "../styles";
import style from "../styles.module.css";
import { total, trade, withdraw } from "../constant/index";
import Bitcoin from "../assets/Bitcoin.png";

const Dashboard = () => {
  return (
    <div className="relative">
      <p className={`${styles.topic} mb-4`}>dashboard</p>
      <div className={`${style.columnBox}`}>
        {trade.map((data, index) => (
          <div className="flex flex-col items-start justify-between gap-4 p-2 px-4 m-4 rounded-lg bg-sec">
            <h5 className="uppercase">{data.tradeName}</h5>
            <p className="text-2xl font-bold">{data.tradeAmount}</p>
          </div>
        ))}
      </div>
      <div className={`${style.columnBox}`}>
        {withdraw.map((data, index) => (
          <div className="flex flex-col items-start justify-between p-2 m-4 rounded-lg bg-sec">
            <div className="relative flex flex-row items-center justify-between w-full gap-4">
              <h5 className="uppercase">{data.withdrawName}</h5>
              <img
                src={Bitcoin}
                alt=""
                className="bg-[#3a4950] p-2 rounded-full mr-6"
              />
            </div>
            <p className="mt-2 text-2xl font-bold ">{data.withdrawAmount}</p>
          </div>
        ))}
      </div>
      <div className={`${style.columnBox} gap-6`}>
        {total.map((data, index) => (
          <div className="flex flex-col items-start justify-between gap-8 p-2 m-4 rounded-lg bg-sec">
            <h5 className="uppercase">{data.totalName}</h5>
            <p className="text-2xl font-bold ">{data.totalAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
