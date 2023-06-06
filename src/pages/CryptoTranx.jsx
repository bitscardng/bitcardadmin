import React from "react";
import Buy from "../components/cryptoTranx/Buy";
import Sell from "../components/cryptoTranx/Sell";
import Send from "../components/cryptoTranx/Send";
import Receive from "../components/cryptoTranx/Receive";
import { styles } from "../styles";

const CryptoTranx = () => {
  return (
    <div className="flex flex-col">
      <p className={`${styles.topic} mb-2`}>crypto transaction</p>
      <div className="flex flex-row justify-between gap-8 pb-10">
        <Buy />
        <Sell />
      </div>
      <div className="flex flex-row justify-between gap-8">
        <Send />
        <Receive />
      </div>
    </div>
  );
};

export default CryptoTranx;
