import { Modal, ConfigProvider, Tabs, Input, InputNumber } from "antd";
import { Btn } from "../antd/Btn";
import {
  useUsdtBuyProfitMutation,
  useUsdtSellProfitMutation,
} from "../../api/cryptoQueries";
import { useState } from "react";
import { toast } from "react-toastify";

const UsdtModal = ({ open, setOpen }) => {
  const [buy, setBuy] = useState();
  const [sell, setSell] = useState();
  const [sellProfit, { isLoading: isSelling }] = useUsdtSellProfitMutation();
  const [buyProfit, { isLoading }] = useUsdtBuyProfitMutation();
  const items = [
    {
      key: "1",
      label: `Usdt Buy Profit`,
      children: (
        <form className="grid grid-cols-1 w-full gap-[1rem]">
          <div className="flex flex-col gap-[0.3rem]">
            <label>Profit</label>
            <InputNumber
              className="w-full"
              name="profit"
              value={buy}
              onChange={setBuy}
              required
            />
          </div>
          <Btn
            onClick={() => {
              buyProfit(sell.toString())
                .unwrap()
                .then((res) => {
                  toast.success(res?.message);
                  setBuy("");
                  setOpen(false);
                });
            }}
            loading={isLoading}
            type="submit"
          >
            Submit
          </Btn>
        </form>
      ),
    },
    {
      key: "2",
      label: `Usdt Sell Profit`,
      children: (
        <form className="grid grid-cols-1 w-full gap-[1rem]">
          <div className="flex flex-col gap-[0.3rem]">
            <label>Profit</label>
            <InputNumber
              className="w-full"
              name="profit"
              value={sell}
              onChange={setSell}
              required
            />
          </div>
          <Btn
            onClick={() => {
              sellProfit(sell.toString())
                .unwrap()
                .then((res) => {
                  toast.success(res?.message);
                  setSell("");
                  setOpen(false);
                });
            }}
            loading={isSelling}
            type="submit"
          >
            Submit
          </Btn>
        </form>
      ),
    },
  ];
  //   const handleOk = () => {
  //     action(data);
  //     !loading && setOpen(false);
  //   };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <ConfigProvider
      theme={{ components: { Tabs: { inkBarColor: "#191c32" } } }}
    >
      <Modal
        title=""
        open={open}
        // onOk={handleOk}
        // confirmLoading={loading}
        onCancel={handleCancel}
        footer={null}
        centered={true}
      >
        <Tabs defaultActiveKey="1" items={items} centered />
      </Modal>
    </ConfigProvider>
  );
};

export default UsdtModal;
