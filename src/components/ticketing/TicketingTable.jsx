import React, { useEffect, useState, useMemo } from "react";
import { Table } from "antd";
import { useGetTicketsQuery } from "../../api/ticketingQueries";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
const TicketingTable = ({ query }) => {
  const navigate = useNavigate();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const { data, isLoading, refetch } = useGetTicketsQuery({
    page: tableParams.pagination.current || 1,
    limit: 5,
    query,
  });
  const columns = useMemo(
    () => [
      {
        render: (_, e, index) => `${index + 1}`,
        width: "10%",
      },
      {
        title: "Issues",
        dataIndex: "issues",
        render: (issues) => `${issues}`,
        width: "75%",
      },
      {
        dataIndex: "_id",
        fixed: "right",
        render: (id) => (
          <button
            onClick={() => {
              navigate(`/ticketing-details/${id}`);
            }}
            className="bg-[#5FC88F] font-[500] rounded-[20px] py-[0.2rem] px-[1rem] font-[Poppins]"
          >
            open
          </button>
        ),
        width: "15%",
      },
      ,
    ],
    []
  );
  const fetchData = () => {
    refetch({ page: tableParams.pagination.current + 1, limit: 5, query })
      .then((result) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            current: result?.pagination?.currentPage,
            total: result?.count,
            pageSize: result?.pagination?.totalItems,
          },
        });
      })
      .catch();
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });

    // // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
  };
  return (
    <div className="capitalize ">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#191c32",
            colorSplit: "#282c4a",
            colorPrimary: "#FFF",
            colorText: "#FFF",
          },
          components: {
            Table: {
              tableHeaderCellSplitColor: "#282c4a",
              colorSplit: "#282c4a",
            },
          },
        }}
      >
        <Table
          columns={columns}
          rowKey={(record) => record?._id}
          dataSource={data?.data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ y: 1200 }}
          bordered
        />
      </ConfigProvider>
    </div>
  );
};
export default TicketingTable;
