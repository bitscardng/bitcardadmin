import { useState } from "react";
import Search from "../components/Search";
import PendingNgnWithdrawalTable from "../components/antd/PendingNgnWithdrawalTable";
import { Tabs, ConfigProvider } from "antd";
import NgnWithdrawalTable from "../components/antd/NgnWithdrawalTable";

const NgnWithdraw = () => {
  const [search, setSearch] = useState("");
  const items = [
    {
      label: <button>Withdrawals</button>,
      key: "1",
      children: <NgnWithdrawalTable />,
    },
    {
      label: <button>Pending Withdrawals</button>,
      key: "2",
      children: <PendingNgnWithdrawalTable />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: "#F7931A",
            itemActiveColor: "#FFF",
            itemSelectedColor: "#F7931A",
            colorText: "#FFF",
          },
        },
      }}
    >
      <Tabs
        items={items}
        tabBarExtraContent={{
          right: (
            <Search
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          ),
        }}
      />
    </ConfigProvider>
  );
};

export default NgnWithdraw;
