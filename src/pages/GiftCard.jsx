import React from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";

const GiftCard = () => {
  return (
    <div>
      <Search />
      <div className="p-2 pt-4">
        <table className="table w-full ">
          <tr className="font-thin rounded-full">
            <th className="font-semibold border">Email</th>
            <th className="font-semibold border">GiftCard</th>
            <th className="font-semibold border">Country</th>
            <th className="font-semibold border">Card Type</th>
            <th className="font-semibold border">Amount</th>
            <th className="font-semibold border">Payout</th>
            <th className="font-semibold border">Status</th>
            <th className="font-semibold border">Transaction date</th>
            <th className="font-semibold border">Approval</th>
          </tr>
          <tbody>
            {giftCard.map((data, index) => {
              return (
                <tr className="">
                  <td className="font-semibold border">Email</td>
                  <td className="font-semibold border">GiftCard</td>
                  <td className="font-semibold border">Country</td>
                  <td className="font-semibold border">Card Type</td>
                  <td className="font-semibold border">Amount</td>
                  <td className="font-semibold border">Payout</td>
                  <td className="font-semibold border">Status</td>
                  <td className="font-semibold border">Transaction date</td>
                  <td className="font-semibold border">Approval</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftCard;
