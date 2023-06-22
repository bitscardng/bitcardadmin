import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { styles } from "../styles";

const BuyGiftCard = () => {
  const [datas, setDatas] = useState(giftCard);
  const [search, setSearch] = useState("");

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 5;
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
              Purchase
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
      <p className={`${styles.topic} mb-4`}>Buy gift card</p>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="p-2 pt-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full ">
            {/* head */}
            <thead className="">
              <tr className="rounded-full">
                <th className="p-2 text-xl font-semibold border"></th>
                <th className="p-2 text-xl font-semibold border">Email</th>
                <th className="p-2 text-xl font-semibold border">GiftCard</th>
                <th className="p-2 text-xl font-semibold border">Country</th>
                <th className="p-2 text-xl font-semibold border">Card Type</th>
                <th className="p-2 text-xl font-semibold border">Amount</th>
                <th className="p-2 text-xl font-semibold border">Payment</th>
                <th className="p-2 text-xl font-semibold border">Status</th>
                <th className="p-2 text-xl font-semibold border">
                  Transaction date
                </th>
                <th className="p-2 text-xl font-semibold border">Approval</th>
              </tr>
            </thead>
            <tbody>{displayDatas}</tbody>
          </table>
        </div>
      </div>

      {/* pagenating */}
      <ReactPaginate
        containerClassName="flex gap-2 text-center rounded-lg items-center outline-none justify-center items-center mt-4"
        previousLabel={
          <span className="p-3 border rounded-lg outline-none hover:bg-active border-sec bg-sec">
            Prev
          </span>
        }
        nextLabel={
          <span className="p-3 border rounded-lg outline-none hover:bg-active border-sec bg-sec">
            Next
          </span>
        }
        pageCount={pageCount}
        onPageChange={changePage}
        pageClassName="hover:bg-active p-3 rounded-lg outline-none"
        disabledClassName={"bg-transparent outline-none"}
        activeLinkClassName={"p-3 bg-active rounded-lg outline-none"}
      />
    </div>
  );
};

export default BuyGiftCard;
