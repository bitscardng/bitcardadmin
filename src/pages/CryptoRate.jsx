import React, { useState } from "react";
import { styles } from "../styles";
import { Modal } from "../components";
import CryptoRateModal from "../components/cryptoTranx/CrytpoRateModal";
import { useGetCryptoRatesQuery } from "../api/cryptoQueries";
import { useGetMarketRateQuery } from "../api/marketApiSlice";

const CryptoRate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([]);
  const { data, isLoading } = useGetCryptoRatesQuery();
  const { data: marketRates } = useGetMarketRateQuery();

  const handleSubmit = (newFormState) => {
    setAmount(...amount, newFormState);
  };
  return (
    <div>
      <p className={`${styles.topic} mb-4`}>crypto rate</p>
      <div className="px-2">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <form className="flex items-center justify-between py-2 text-center">
              <p className="flex items-center justify-center pl-3 m-1 text-xl font-semibold rounded-full bg-sec">
                Selling Profit
                <span className="h-10 p-2 ml-4 text-black bg-white rounded-r-full min-w-[3pc]">
                  {amount.sell}
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
                <span className="h-10 p-2 ml-4 text-black bg-white rounded-r-full min-w-[3pc] ">
                  {amount.buy}
                </span>
              </p>
            </form>
            <table className="w-full ">
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
                <tr className="text-center hover:bg-sec">
                  <th className="p-1 px-2 text-xl duration-500 border">1</th>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    BTC
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.btc?.buy} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.btc?.sell} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {marketRates?.bitcoin?.usd} / btc
                  </td>
                </tr>
                <tr className="text-center hover:bg-sec">
                  <th className="p-1 px-2 text-xl duration-500 border">2</th>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    USDT
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.usdt?.buy} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.usdt?.sell} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {marketRates?.tether?.usd} / usdt
                  </td>
                </tr>
                <tr className="text-center hover:bg-sec">
                  <th className="p-1 px-2 text-xl duration-500 border">3</th>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    USD
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.usd?.buy} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data?.data?.usd?.sell} / $
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {marketRates?.usd?.usd} / $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CryptoRateModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default CryptoRate;
