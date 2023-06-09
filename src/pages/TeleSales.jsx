import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../components/Search";
import { giftCard } from "../constant";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailForward } from "react-icons/tb";

const TeleSales = () => {
  const [datas, setDatas] = useState(giftCard);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);

  const increaseProgressBtn = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    } else {
      return setProgress(progress - 100);
    }
  };

  const getColor = () => {
    if (progress < 50) {
      return "#ff0000";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };

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
            <div className="flex flex-col">
              <p>{data.email}</p>
              <Link
                to="/telesales/sendemail"
                className={`${styles.btn} flex items-center justify-between `}
              >
                <span>
                  <TbMailForward />
                </span>
                Send email
              </Link>
            </div>
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            <div className="flex flex-col">
              <p className="px-1">09012345678</p>
              <button
                onClick={increaseProgressBtn}
                className={`${styles.btn} flex items-center justify-between`}
              >
                <span className="pr-2">
                  <FiPhoneCall />
                </span>
                Customer
              </button>
            </div>
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.name}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            Yes
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            Yes
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            Yes
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.transDate}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            Yes
          </td>
          <td className="w-full p-1 text-xl font-thin duration-500 border">
            <p className="pt-2 mb-3 font-normal text-active">{progress}%</p>
            <div
              style={{ width: `${progress}%`, backgroundColor: getColor() }}
              className="py-4 text-white duration-500 ease-out rounded-2xl"
              value={progress}
            ></div>
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            <Link to="/usersdetails">
              <p className="bg-[green] p-1 rounded-lg cursor-pointer hover:font-normal duration-500">
                Details
              </p>
            </Link>
          </td>
        </tr>
      );
    });
  //pagination end

  return (
    <div className="">
      <p className={`${styles.topic} mb-2`}>tele sales</p>
      <div className="p-2">
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="w-full">
          <div className="">
            <table className="w-full mt-8">
              {/* head */}
              <thead className="">
                <tr className="rounded-full">
                  <th className="p-2 text-xl font-semibold border"></th>
                  <th className="p-2 text-xl font-semibold border">Email</th>
                  <th className="p-2 text-xl font-semibold border">
                    Phone Number
                  </th>
                  <th className="p-2 text-xl font-semibold border">
                    Users Name
                  </th>
                  <th className="p-2 text-xl font-semibold border">KYC 1&2</th>
                  <th className="p-2 text-xl font-semibold border">KYC 3</th>
                  <th className="p-2 text-xl font-semibold border">KYC 4</th>
                  <th className="p-2 text-xl font-semibold border">
                    Joined Date
                  </th>
                  <th className="p-2 text-xl font-semibold border">
                    Transaction
                  </th>
                  <th className="p-2 px-10 text-xl font-semibold border">
                    Status
                  </th>
                  <th className="p-2 text-xl font-semibold border">Preview</th>
                </tr>
              </thead>
              <tbody>{displayDatas}</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* pagenating */}
      <div className="relative">
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
    </div>
  );
};

export default TeleSales;
