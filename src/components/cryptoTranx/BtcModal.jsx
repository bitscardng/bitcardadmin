import { Modal, ConfigProvider, Tabs, Input, InputNumber } from "antd";
import { Btn } from "../antd/Btn";
import {
  useBtcBuyProfitMutation,
  useBtcSellProfitMutation,
} from "../../api/cryptoQueries";
import { useState } from "react";
import { toast } from "react-toastify";

const BtcModal = ({ open, setOpen }) => {
  const [buy, setBuy] = useState();
  const [sell, setSell] = useState();
  const [sellProfit, { isLoading: isSelling }] = useBtcSellProfitMutation();
  const [buyProfit, { isLoading }] = useBtcBuyProfitMutation();
  const items = [
    {
      key: "1",
      label: `Btc Buy Profit`,
      children: (
        <form className="grid grid-cols-1 w-full gap-[1rem]">
          <div className="flex flex-col gap-[0.3rem]">
            <label>Profit</label>
            <InputNumber
              className="w-full"
              name="profit"
              controls={false}
              value={buy}
              onChange={setBuy}
              required
            />
          </div>
          <Btn
            loading={isLoading}
            onClick={() => {
              buyProfit(buy.toString())
                .unwrap()
                .then((res) => {
                  toast.success(res?.message);
                  setBuy("");
                  setOpen(false);
                });
            }}
            type="submit"
          >
            Submit
          </Btn>
        </form>
      ),
    },
    {
      key: "2",
      label: `Btc Sell Profit`,
      children: (
        <form className="grid grid-cols-1 w-full gap-[1rem]">
          <div className="flex flex-col gap-[0.3rem]">
            <label>Profit</label>
            <InputNumber
              className="w-full"
              controls={false}
              name="profit"
              value={sell}
              onChange={setSell}
              required
            />
          </div>
          <Btn
            onClick={() => {
              sellProfit(buy.toString())
                .unwrap()
                .then((res) => {
                  console.log(res);
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

export default BtcModal;
