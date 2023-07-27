import React from "react";
import { total, trade, withdraw, cards } from "../constant/index";
import Bitcoin from "../assets/Bitcoin.svg";
import Chart2 from "../components/Chart2";

const Dashboard = () => {
  return (
    <div className="relative grid grid-cols-1 gap-[1rem]">
      {/* <Chart /> */}
      <div className="w-full grid grid-cols-5 gap-[1rem] items-center justify-between">
        {trade.map((data, index) => (
          <div className="flex flex-col items-start justify-between gap-[0.2rem] p-[1rem] px[0.5rem] rounded-[25px] bg-sec">
            <h5 className="uppercase text-[14px] font-[600]">
              {data.tradeName}
            </h5>
            <p className="text-[20px] font-[500]">{data.tradeAmount}</p>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-5 items-center justify-between gap-[1rem]">
        {withdraw.map((data, index) => (
          <div className="flex flex-col items-start justify-between rounded-[25px] px-[1rem] py-[0.5rem] bg-sec">
            <div className="relative flex flex-row items-end justify-between w-full gap-[0.5rem]">
              <h5 className="uppercase text-[14px] font-[600]">
                {data.withdrawName}
              </h5>
              <img src={Bitcoin} alt="" />
            </div>
            <p className="text-[20px] font-[500]">{data.withdrawAmount}</p>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-4 items-center justify-between gap-[1.5rem]">
        {total.map((data, index) => (
          <div className="flex flex-col items-start justify-around gap-[1rem] px-[1rem] py-2 m4 rounded-[25px] bg-sec min-h-[102px]">
            <h5 className="uppercase text-[16px] font-[600]">
              {data.totalName}
            </h5>
            <p className="text-[20px] font-[500]">{data.totalAmount}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[30%_70%] justify-between">
        <div>
          <div className="grid grid-cols-1 gap-[1rem] w-[80%] mxauto justify-start">
            {cards.map((data, index) => (
              <div className="flex flex-col items-start justify-around gap-[1rem] px-[1rem] py-2 rounded-[25px] bg-sec min-h-[102px]">
                <h5 className="uppercase text-[16px] font-[600]">
                  {data.totalName}
                </h5>
                <p className="text-[20px] font-[500]">{data.totalAmount}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-[0.8rem]">
          <div className="h-[200px] bg-[#282C4A] py-[0.5rem] rounded-[25px]">
            <Chart2 stroke1={"#00C566"} stroke2={"#885DF5"} />
          </div>
          <div className="h-[200px] bg-[#282C4A] py-[0.5rem] rounded-[25px]">
            <Chart2 stroke1={"#219DFC"} stroke2={"#FCB721"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
