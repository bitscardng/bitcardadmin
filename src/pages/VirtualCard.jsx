import React, { useState } from "react";
import Search from "../components/Search";
import ReactPaginate from "react-paginate";
import { giftCard } from "../constant";
import { HiOutlineMail } from "react-icons/hi";
import { styles } from "../styles";
import VirtualCardTable from "../components/antd/VirtualCardTable";

const VirtualCard = () => {
  //pagination end
  return (
    <div>
      <p className={`${styles.topic}`}>virtual card transaction</p>
      <VirtualCardTable />
    </div>
  );
};

export default VirtualCard;
