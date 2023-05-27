import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { HiOutlineMail } from "react-icons/hi";

const GhsWithdraw = () => {
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
        <tr className="text-center" key={index}>
          <th className="p-1 px-2 text-xl duration-500 border">{index + 1}</th>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.email}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.name}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.amount}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            <p className="p-2 rounded-lg bg-active">Preview details</p>
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.transDate} <span>{data.transTime}</span>
          </td>
          <td className="flex flex-col h-full gap-2 p-2 text-xl font-thin border">
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
      <div className="p-2 pt-8">
        <div className="flex justify-between w-full gap-8 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center gap-20 pb-2 text-center">
              <Search
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <p className="text-2xl font-bold text-end">Ghs Withdraw</p>
            </div>
            <table className="w-full ">
              {/* head */}
              <thead className="">
                <tr className="rounded-full">
                  <th className="p-2 text-xl font-semibold border"></th>
                  <th className="p-2 text-xl font-semibold border">Email</th>
                  <th className="p-2 text-xl font-semibold border">Username</th>
                  <th className="p-2 text-xl font-semibold border">Amount</th>
                  <th className="p-2 text-xl font-semibold border">Details</th>
                  <th className="p-2 text-xl font-semibold border">Date</th>
                  <th className="p-2 text-xl font-semibold border">Status</th>
                </tr>
              </thead>
              <tbody>{displayDatas}</tbody>
            </table>
          </div>
          <div className="flex flex-col w-[28rem]">
            <p className="pb-2 text-2xl font-bold text-center">
              User Transaction
            </p>
            <div className="flex flex-col font-thin text-[#9395A4]">
              <div className="flex items-center w-full gap-3 p-2 px-4 my-2 rounded-full bg-sec">
                <div className="flex flex-row items-center gap-2 text-center">
                  <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                    <HiOutlineMail className="text-[#5ec88f]" />
                  </div>
                  <p>Email</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-2xl bg-sec">
                <p className="p-2 pl-4 rounded-full bg-primary">{"xvalzs"}</p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Balance : ${"400"}
                </p>
                <div className="p-4 py-8 rounded-2xl bg-primary">
                  <h5>Transaction History</h5>
                  <div className="pt-4">
                    <div className="flex items-center justify-between text-center">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                    <div className="flex items-center justify-between text-center">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                    <div className="flex items-center justify-between text-center">
                      <p>{"Netflix"}</p>
                      <p>{"$100"}</p>
                      <p>{"23/12/2023  20:10"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default GhsWithdraw;
