import { useState } from "react";
import Search from "../components/Search";
import NgnWithdrawalTable from "../components/antd/NgnWithdrawalTable";

const NgnWithdraw = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="mt-4">
        <NgnWithdrawalTable />
      </div>
    </div>
  );
};

export default NgnWithdraw;
