import React from "react";

const datas = [
  { title: "Users name", result: "xvals" },
  { title: "email address", result: "xvals@gamil.com" },
  { title: "email verified", result: "yes" },
  { title: "kyc 1 & 2", result: "yes" },
  { title: "kyc 3", result: "yes" },
  { title: "kyc 4", result: "yes" },
  { title: "usd balance", result: "$500" },
  { title: "naira balance", result: "N500", add: "Add", deduct: "Deduct" },
  { title: "card balance", result: "$500" },
  { title: "joined", result: "15-4-2023" },
  { title: "BTC-bdahsgkdachna777", result: "0.004" },
  { title: "USDT - kfgdckjdhcguk", result: "$50" },
  { title: "referral code", result: "GVRS" },
  { title: "P2P ( Merchant )", result: "YES" },
  { title: "P2P ( Merchant Balance )", result: "$400" },
  { title: "NGN Account Balance", result: "1234567890 GTB valentine Aninyem" },
  { title: "USD Account Balance", result: "1234567890 GTB valentine Aninyem" },
];

const Details = () => {
  return (
    <div>
      <table className="w-full mt-10">
        <thead className="">
          <tr className="">
            <th className="hidden p-2 text-xl font-semibold border"></th>
            <th className="hidden p-2 text-xl font-semibold border"></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr className="text-center ">
                <div>
                  <td className="p-1 px-2 text-xl font-semibold capitalize duration-500 border">
                    {data.title}
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data.result}
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
