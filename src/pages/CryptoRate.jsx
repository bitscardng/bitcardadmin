import React, { useState } from "react";
import { styles } from "../styles";
import { Modal } from "../components";

const rate = [
  { coin: "BTC", buying: "749.5", selling: "770", market: "29,012.23" },
  { coin: "BTC", buying: "747.5", selling: "774", market: "28,000.23" },
];

const CryptoRate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([{ buy: "300", sell: "200" }]);

  const handleSubmit = (newAmount) => {
    setAmount(...amount, newAmount);
  };

  return (
    <div>
      <p className={`${styles.topic} mb-4`}>crypto rate</p>
      <div className="px-2">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            {amount.map((amt, index) => {
              return (
                <div className="flex items-center justify-between py-2 text-center">
                  <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                    Selling Profit
                    <span className="p-2 ml-4 text-black bg-white rounded-r-full">
                      {amt.sell}
                    </span>
                  </p>
                  <div
                    className={`${styles.btn} max-w-fit px-10 `}
                    onClick={() => setModalOpen(true)}
                  >
                    Edit
                  </div>
                  <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                    Buying Profit
                    <span className="p-2 ml-4 text-black bg-white rounded-r-full">
                      {amt.buy}
                    </span>
                  </p>
                </div>
              );
            })}
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
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CryptoRate;
