import { useState } from "react";
import Buy from "../components/cryptoTranx/Buy";
import Sell from "../components/cryptoTranx/Sell";
import Send from "../components/cryptoTranx/Send";
import Receive from "../components/cryptoTranx/Receive";
import { styles } from "../styles";
import BtcModal from "../components/cryptoTranx/BtcModal";
import UsdtModal from "../components/cryptoTranx/UsdtModal";
import CryptoTable from "../components/antd/CryptoTable";
import Search from "../components/Search";
import { Btn } from "../components/antd/Btn";

const CryptoTranx = () => {
  const [openBtc, setOpenBtc] = useState(false);
  const [openUsdt, setOpenUsdt] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full">
          <Search
            // value={}
            onChange={(e) => {
              // setSearch(e.target.value);
            }}
          />
          <div className="flex gap-[0.5rem]">
            <Btn onClick={() => setOpenBtc(true)} type="primary">
              Btc Margin
            </Btn>
            <Btn onClick={() => setOpenUsdt(true)} type="primary">
              Usdt Margin
            </Btn>
          </div>
        </div>
        <div className="mt-4">
          <CryptoTable />
        </div>
      </div>
      <BtcModal open={openBtc} setOpen={setOpenBtc} />
      <UsdtModal open={openUsdt} setOpen={setOpenUsdt} />
    </>
  );
};

export default CryptoTranx;
