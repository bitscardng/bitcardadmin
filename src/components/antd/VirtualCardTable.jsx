import React, { useEffect, useState, useMemo } from "react";
import { useLazyVirtualCardTransactionsQuery } from "../../api/virualCardQueries";
import { ConfigProvider, Table } from "antd";
import Search from "../Search";
const VirtualCardTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [search, setSearch] = useState("");
  const [fetchTransaction, { isLoading, data: result }] =
    useLazyVirtualCardTransactionsQuery();
  const columns = useMemo(
    () => [
      {
        title: "Email",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "20%",
      },
      {
        title: "Type",
        dataIndex: "type",
        render: (type) => `${type}`,
        width: "20%",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (amount) => `${amount ? `N${amount}` : "N/A"}`,
        width: "20%",
      },
      {
        title: "Date",
        dataIndex: "createdAt",
        render: (date) => `${new Date(date).toDateString()}`,
        width: "20%",
      },
      {
        title: "Status",
        dataIndex: "reference_validated",
        render: (status) => (
          <button className="bg-green-500 text-white px-3 py-1 rounded">
            {status ? "Received" : "Pending"}
          </button>
        ),
        width: "10%",
      },
    ],
    []
  );
  const fetchData = (data) => {
    fetchTransaction(data)
      .unwrap()
      .then((result) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: result?.pagination?.totalItems,
            // pageSize: result?.pagination?.totalItems,
          },
        });
      })
      .catch();
  };
  useEffect(() => {
    fetchData({
      searchQuery: search,
      page: tableParams.pagination.current,
      ...tableParams.pagination,
    });
  }, [JSON.stringify(tableParams), search]);
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <div className="capitalize ">
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
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
          dataSource={result?.data || []}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ x: 1000, y: 1200 }}
        />
      </ConfigProvider>
    </div>
  );
};
export default VirtualCardTable;
