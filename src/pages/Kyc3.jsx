import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { human } from "../assets";
import { styles } from "../styles";

const Kyc3 = () => {
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
        <tr
          className="text-xl font-thin text-center capitalize hover:bg-sec"
          key={index}
        >
          <th className="p-1 px-2 duration-500 border">{index + 1}</th>
          <td className="p-1 px-2 duration-500 border">{data.email}</td>
          <td className="p-1 px-2 duration-500 border">{"national id"}</td>
          <td className="p-1 px-2 duration-500 border">
            <img
              src={human}
              alt=""
              className="p-1 border rounded-full border-active max-w-[8rem]"
            />
          </td>
          <td className="p-1 px-2 font-thin border">{"Nigeria"}</td>
          <td className="p-1 px-2 duration-500 border">
            <img
              src={human}
              alt=""
              className="p-1 border rounded-full border-active max-w-[8rem]"
            />
          </td>
          <td className="p-1 px-2 duration-500 border">{data.country}</td>
          <td className="flex flex-col gap-2 p-2 border">
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
      <p className={`${styles.topic} mb-0`}>kyc 3</p>
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
                <th className="p-2 text-xl font-semibold uppercase border">
                  user email
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  id type
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  id upload
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  id number
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  selfie image
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  country
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  status
                </th>
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

export default Kyc3;
