import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { styles } from "../styles";
import SellGiftCardTable from "../components/antd/SellGiftCardTable";

const SellGiftCard = () => {
  const [datas, setDatas] = useState(giftCard);
  const [search, setSearch] = useState("");

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 10;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(datas.length / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayDatas = datas
    .slice(pageVisited, pageVisited + datasPerPage)
    .map((data, index) => {
      return (
        <tr className="text-center hover:bg-sec" key={index}>
          <th className="p-1 px-2 text-xl duration-500 border">{index + 1}</th>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.email}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.giftCard}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.country}
          </td>
          <td className="p-1 px-2 font-thin border">{data.cardType}</td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.amount}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.payout}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {<p className="p-2 rounded-lg bg-active">Pending</p>}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.transDate} <span>{data.transTime}</span>
          </td>
          <td className="flex flex-col gap-2 p-2 text-xl font-thin border">
            <btn className="bg-[green] p-1 rounded-lg cursor-pointer hover:font-normal duration-500">
              Approved
            </btn>
            <btn className="bg-[red] p-1 rounded-lg cursor-pointer hover:font-normal duration-500">
              Decline
            </btn>
          </td>
        </tr>
      );
    });
  //pagination end
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
