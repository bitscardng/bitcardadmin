import React, { useState } from "react";
import Search from "../components/Search";
import { styles } from "../styles";

const rate = [
  { coin: "BTC", buying: "749.5", selling: "770", market: "29,012.23" },
  { coin: "BTC", buying: "747.5", selling: "774", market: "28,000.23" },
];

const CryptoRate = () => {
  //pagination end

  return (
    <div>
      <p className={`${styles.topic} mb-4`}>usd withdrawal</p>
      <div className="px-2">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-between py-2 text-center">
              <div className="flex flex-row justify-between gap-4">
                <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                  Selling Profit
                  <span className="p-2 ml-4 text-black bg-white rounded-r-full">
                    {"100"}
                  </span>
                </p>
                <div className="flex flex-row justify-between">
                  <p className="p-2 m-1 duration-500 rounded-full bg-active hover:px-4">
                    Edit
                  </p>
                  <p className="p-2 bg-[green] m-1 rounded-full hover:px-4 duration-500">
                    Update
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                  Buying Profit
                  <span className="p-2 ml-4 text-black bg-white rounded-r-full">
                    {"100"}
                  </span>
                </p>
                <div className="flex flex-row justify-between">
                  <p className="p-2 m-1 duration-500 rounded-full bg-active hover:px-4">
                    Edit
                  </p>
                  <p className="p-2 bg-[green] m-1 rounded-full hover:px-4 duration-500">
                    Update
                  </p>
                </div>
              </div>
            </div>
            <table className="w-full ">
              {/* head */}
              <thead className="">
                <tr className="rounded-full">
                  <th className="p-2 text-xl font-semibold border"></th>
                  <th className="p-2 text-xl font-semibold border">Coin</th>
                  <th className="p-2 text-xl font-semibold border">Buying</th>
                  <th className="p-2 text-xl font-semibold border">Selling</th>
                  <th className="p-2 text-xl font-semibold border">
                    Market Rate $
                  </th>
                </tr>
              </thead>
              <tbody>
                {rate.map((data, index) => {
                  return (
                    <tr className="text-center hover:bg-sec" key={index}>
                      <th className="p-1 px-2 text-xl duration-500 border">
                        {index + 1}
                      </th>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {data.coin}
                      </td>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {data.buying}
                      </td>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {data.selling} / $
                      </td>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {"29.012.23"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoRate;
