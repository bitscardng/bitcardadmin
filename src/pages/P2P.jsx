import React, { useState } from "react";
import Search from "../components/Search";
import Merchant from "../components/p2p/Merchant";
import Market from "../components/p2p/Market";

const P2P = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="p-2 pt-8">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <Merchant/>
          <Market/>
        </div>
      </div>
    </div>
  );
};

export default P2P;
