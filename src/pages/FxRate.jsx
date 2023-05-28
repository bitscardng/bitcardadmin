import React, { useState } from "react";
import Search from "../components/Search";

const rate = [
  { currency: "NGN", rate: "749.5" },
  { currency: "KES", rate: "63" },
  { currency: "GHS", rate: "9" },
  { currency: "XAF", rate: "660" },
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
              <p className="text-2xl font-bold text-end">FX Rate</p>
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
                    <tr className="text-center" key={index}>
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

export default GhsWithdraw;
