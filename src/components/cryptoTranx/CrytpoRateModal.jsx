import { Modal, ConfigProvider, Tabs, InputNumber } from "antd";
import { Btn } from "../antd/Btn";
import {
  useBtcBuyProfitMutation,
  useBtcSellProfitMutation,
  useUsdtBuyProfitMutation,
  useUsdtSellProfitMutation,
  useUsdBuyProfitMutation,
  useUsdSellProfitMutation,
  useGetCryptoRatesQuery,
} from "../../api/cryptoQueries";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CryptoRateModal = ({ open, setOpen }) => {
  const [buyBtc, setBuyBtc] = useState();
  const [sellBtc, setSellBtc] = useState();
  const [buyUsdt, setBuyUsdt] = useState();
  const [sellUsdt, setSellUsdt] = useState();
  const [buyUsd, setBuyUsd] = useState();
  const [sellUsd, setSellUsd] = useState();
  const [btcSellProfit, { isLoading: isSellingBtc }] =
    useBtcSellProfitMutation();
  const [btcBuyProfit, { isLoading: isBuyingBtc }] = useBtcBuyProfitMutation();
  const [usdtSellProfit, { isLoading: isSellingUsdt }] =
    useUsdtSellProfitMutation();
  const [usdtBuyProfit, { isLoading: isBuyingUsdt }] =
    useUsdtBuyProfitMutation();
  const [usdSellProfit, { isLoading: isSellingUsd }] =
    useUsdSellProfitMutation();
  const [usdBuyProfit, { isLoading: isBuyingUsd }] = useUsdBuyProfitMutation();
  const items = [
    {
      key: "1",
      label: `BTC`,
      children: (
        <div className="grid grid-cols-1 w-full gap-[1rem]">
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Buy Profit</label>
              <InputNumber
                className="w-full"
                name="profit"
                controls={false}
                value={buyBtc}
                onChange={setBuyBtc}
                required
              />
            </div>
            <Btn
              loading={isBuyingBtc}
              onClick={() => {
                btcBuyProfit(buyBtc.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setBuyBtc("");
                  });
              }}
              type="submit"
            >
              Update
            </Btn>
          </form>
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Sell Profit</label>
              <InputNumber
                className="w-full"
                controls={false}
                name="profit"
                value={sellBtc}
                onChange={setSellBtc}
                required
              />
            </div>
            <Btn
              onClick={() => {
                btcSellProfit(sellBtc.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setSellBtc("");
                  });
              }}
              loading={isSellingBtc}
              type="submit"
            >
              Update
            </Btn>
          </form>
        </div>
      ),
    },
    {
      key: "2",
      label: `USDT`,
      children: (
        <div className="grid grid-cols-1 w-full gap-[1rem]">
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Buy Profit</label>
              <InputNumber
                className="w-full"
                name="profit"
                controls={false}
                value={buyUsdt}
                onChange={setBuyUsdt}
                required
              />
            </div>
            <Btn
              loading={isBuyingUsdt}
              onClick={() => {
                usdtBuyProfit(buyUsdt.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setBuyUsdt("");
                    setOpen(false);
                  });
              }}
              type="submit"
            >
              Update
            </Btn>
          </form>
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Sell Profit</label>
              <InputNumber
                className="w-full"
                controls={false}
                name="profit"
                value={sellUsdt}
                onChange={setSellUsdt}
                required
              />
            </div>
            <Btn
              onClick={() => {
                usdtSellProfit(buyUsdt.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setSellUsdt("");
                  });
              }}
              loading={isSellingUsdt}
              type="submit"
            >
              Update
            </Btn>
          </form>
        </div>
      ),
    },
    {
      key: "3",
      label: `USD`,
      children: (
        <div className="grid grid-cols-1 w-full gap-[1rem]">
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Buy Profit</label>
              <InputNumber
                className="w-full"
                name="profit"
                controls={false}
                value={buyUsd}
                onChange={setBuyUsd}
                required
              />
            </div>
            <Btn
              loading={isBuyingUsd}
              onClick={() => {
                usdBuyProfit(buyUsd.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setBuyUsd("");
                  });
              }}
              type="submit"
            >
              Update
            </Btn>
          </form>
          <form className="flex justify-between items-end w-full gap-[0.5rem]">
            <div className="flex flex-col w-full">
              <label>Sell Profit</label>
              <InputNumber
                className="w-full"
                controls={false}
                name="profit"
                value={sellUsd}
                onChange={setSellUsd}
                required
              />
            </div>
            <Btn
              onClick={() => {
                usdSellProfit(buyUsd.toString())
                  .unwrap()
                  .then((res) => {
                    toast.success(res?.message);
                    setSellUsd("");
                  });
              }}
              loading={isSellingUsd}
              type="submit"
            >
              Update
            </Btn>
          </form>
        </div>
      ),
    },
  ];
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <ConfigProvider
      theme={{ components: { Tabs: { inkBarColor: "#191c32" } } }}
    >
      <Modal
        // title=""
        open={open}
        // onOk={handleOk}
        // confirmLoading={loading}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        okButtonProps={{ style: { backgroundColor: "#191c32" } }}
      >
        <Tabs defaultActiveKey="1" items={items} centered />
      </Modal>
    </ConfigProvider>
  );
};

export default CryptoRateModal;
