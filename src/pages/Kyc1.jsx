import React, { useState } from "react";
import Search from "../components/Search";
import { giftCard } from "../constant";
import ReactPaginate from "react-paginate";
import { human } from "../assets";
import { styles } from "../styles";
import {
  useGetKyc1_2Query,
  useVerifyKyc1_2Mutation,
  useDeclineKyc1_2Mutation,
} from "../api/kycQueries";
import Kyc1Table from "../components/antd/Kyc1Table";

const Kyc1 = () => {
  const [datas, setDatas] = useState(giftCard);
  const [search, setSearch] = useState("");
  const { data = [], isLoading } = useGetKyc1_2Query();

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
          <td className="p-1 px-2 duration-500 border">{data.country}</td>
          <td className="p-1 px-2 duration-500 border">{"val"}</td>
          <td className="p-1 px-2 duration-500 border">{"doe"}</td>
          <td className="p-1 px-2 font-thin border">{data.email}</td>
          <td className="p-1 px-2 duration-500 border">{data.transDate}</td>
          <td className="p-1 px-2 duration-500 border">{"081012345678"}</td>
          <td className="p-1 px-2 duration-500 border">{"1, john doe str"}</td>
          <td className="p-1 px-2 duration-500 border">{"Lagos"}</td>
          <td className="p-1 px-2 duration-500 border">{"1234567890"}</td>
          <td className="p-1 px-2 duration-500 border">
            <img
              src={human}
              alt=""
              className="p-1 border rounded-full border-active"
            />
          </td>
          <td className="p-1 px-2 duration-500 border">{"101101"}</td>
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
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Kyc1Table />
      {/* <div className="p-2 pt-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full ">
            <thead className="">
              <tr className="rounded-full">
                <th className="p-2 text-xl font-semibold border"></th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  country
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  first name
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  last name
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  email address
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  dob
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  phone number
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  address
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  state
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  bvn
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  image
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  postal code
                </th>
                <th className="p-2 text-xl font-semibold uppercase border">
                  status
                </th>
              </tr>
            </thead>
            <tbody>{displayDatas}</tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Kyc1;
