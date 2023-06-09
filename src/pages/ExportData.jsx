import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { giftCard } from "../constant";
import { Link } from "react-router-dom";
import { styles } from "../styles";



const ExportData = () => {
  const [datas, setDatas] = useState(giftCard);

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
          <td></td>
        </tr>
      );
    });
  //pagination end

  return (
    <div>
      <p className={`${styles.topic} mb-0`}>export data</p>
      <div className="">
        <table className="w-full mt-8">
          {/* head */}
          <thead className="">
            <tr className="rounded-full">
              <th className="p-2 text-xl font-semibold bg-sec "></th>
              <th className="p-2 text-xl font-semibold bg-sec ">Country NGN</th>
              <th className="p-2 text-xl font-semibold bg-sec ">Country INT</th>
              <th className="p-2 text-xl font-semibold bg-sec ">Country GHS</th>
              <th className="p-2 text-xl font-semibold bg-sec ">Country KYA</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ExportData;
