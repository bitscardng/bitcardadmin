import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { giftCard } from "../../constant";
import { useGetTransactionListQuery } from "../../api/p2pQueries";

const Market = () => {
  const { data: result = [], isLoading, refetch} = useGetTransactionListQuery();
  const [datas, setDatas] = useState(giftCard);

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 10;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(result?.data?.results / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    refetch()
  }, [])

  const displayDatas = result?.data?.results
    .slice(pageVisited, pageVisited + datasPerPage)
    .map((data, index) => {
      return (
        <tr className="text-center hover:bg-sec" key={index}>
          <th className="p-1 px-2 text-xl duration-500 border">{index + 1}</th>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data?.user_info['username']}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data['asset']}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {"$ "}
            {data['crypto_amount']}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data['order_type']}
          </td>
        </tr>
      );
    });
  //pagination end

  return (
    <div>
      <div className="p-2 pt-8">
        <div className="w-full">
          <div className="">
            <p className="pb-2 text-2xl font-bold text-center">Market Trades</p>
            <table className="w-full ">
              {/* head */}
              <thead className="">
                <tr className="rounded-full">
                  <th className="p-2 text-xl font-semibold border"></th>
                  <th className="p-2 text-xl font-semibold border">Email</th>
                  <th className="p-2 text-xl font-semibold border">Type</th>
                  <th className="p-2 text-xl font-semibold border">Amount</th>
                  <th className="p-2 text-xl font-semibold border">Crypto</th>
                </tr>
              </thead>
              <tbody>{result?.data?.results.length === 0 ? 'No Available Data' : displayDatas}</tbody>
            </table>
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

export default Market;
