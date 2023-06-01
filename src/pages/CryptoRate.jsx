import React, { useState } from "react";
import Search from "../components/Search";

const rate = [
  { coin: "BTC", buying: "749.5", selling: "770", market: "29,012.23" },
  { coin: "BTC", buying: "747.5", selling: "774", market: "28,000.23" },
];

const GhsWithdraw = () => {
  const [search, setSearch] = useState("");

  //pagination end

  return (
    <div>
      <div className="p-2 pt-8">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center gap-20 pb-2 text-center">
              <Search
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <p className="text-2xl font-bold text-end">Crypto Rate</p>
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

export default GhsWithdraw;
