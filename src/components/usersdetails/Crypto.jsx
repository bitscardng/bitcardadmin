import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const virtualcard = [
  {
    crypto: "USDT",
    type: "Sell",
    amount: "N749.5",
    date: "15-3-2023",
  },
  {
    crypto: "BTC",
    type: "Buy",
    amount: "N749.5",
    date: "15-3-2023",
  },
  {
    crypto: "USDT",
    type: "Fund",
    amount: "N749.5",
    date: "15-3-2023",
  },
  {
    crypto: "BTC",
    type: "Buy",
    amount: "N749.5",
    date: "15-3-2023",
  },
  {
    crypto: "USDT",
    type: "Fund",
    amount: "N749.5",
    date: "15-3-2023",
  },
  {
    crypto: "BTC",
    type: "Buy",
    amount: "N749.5",
    date: "15-3-2023",
  },
];
const VirtualCard = () => {
  const [datas, setDatas] = useState(virtualcard);

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
          <td className="p-1 px-2 text-xl font-thin uppercase duration-500 border">
            {data.crypto}
          </td>
          <td className="p-1 px-2 text-xl font-thin capitalize duration-500 border">
            {data.type}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.amount}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.date}
          </td>
        </tr>
      );
    });
  //pagination end

  return (
    <div>
      <h1 className="pb-2 text-xl font-semibold text-center uppercase text-active">
        crypto transaction
      </h1>
      <table className="w-full ">
        {/* head */}
        <thead className="">
          <tr className="rounded-full">
            <th className="p-2 text-xl font-semibold border"></th>
            <th className="p-2 text-xl font-semibold border">Crypto</th>
            <th className="p-2 text-xl font-semibold border">Type</th>
            <th className="p-2 text-xl font-semibold border">Amount</th>
            <th className="p-2 text-xl font-semibold border">Date</th>
          </tr>
        </thead>
        <tbody>{displayDatas}</tbody>
      </table>
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

export default VirtualCard;
