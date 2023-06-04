import React, { useState } from "react";

const rate = [
  { currency: "NGN", rate: "749.5" },
  { currency: "KES", rate: "63" },
  { currency: "GHS", rate: "9" },
  { currency: "XAF", rate: "660" },
  { currency: "1", rate: "660" },
];

const Sell = () => {
  return (
    <div>
      <div className="p-2 pt-8">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center pb-2 justify-evenly">
              <p className="text-2xl font-bold">FX Rate Sell</p>
              <div className="flex flex-row justify-between gap-4">
                <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                  Profit
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
                  <th className="p-2 text-xl font-semibold border">Currency</th>
                  <th className="p-2 text-xl font-semibold border">Rate</th>
                  <th className="p-2 text-xl font-semibold border">
                    Base Currency
                  </th>
                </tr>
              </thead>
              <tbody>
                {rate.map((data, index) => {
                  return (
                    <tr className="text-center hover:bg-sec" key={index}>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {data.currency}
                      </td>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        {data.rate} / $
                      </td>
                      <td className="p-1 px-2 text-xl font-thin duration-500 border">
                        1$
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

export default Sell;
