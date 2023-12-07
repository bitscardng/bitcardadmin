import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { styles } from "../styles";
import SellGiftCardTable from "../components/antd/SellGiftCardTable";

const SellGiftCard = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <p className={`${styles.topic} mb-4`}>Sell gift card</p>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <SellGiftCardTable />
    </div>
  );
};

export default SellGiftCard;
