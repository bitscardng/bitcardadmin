import React, { useEffect, useState, useMemo } from "react";
import { useLazyGetCryptoTransactionsQuery } from "../../api/cryptoQueries";
import { ConfigProvider, Select, Table } from "antd";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const options = [
  { value: "sell", label: "Sell" },
  { value: "buy", label: "Buy" },
  { value: "send", label: "Send" },
  { value: "receive", label: "Receive" },
];
const CryptoTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [fetchTransaction, { isLoading, data: result = [] }] =
    useLazyGetCryptoTransactionsQuery();
  const columns = useMemo(
    () => [
      {
        title: "Email",
        dataIndex: "user_email",
        render: (email) => `${email}`,
        width: "20%",
      },
      {
        title: "Type",
        dataIndex: "transaction_type",
        render: (type) => `${type}`,
        width: "20%",
      },
      {
        title: "Naira Amount",
        dataIndex: "naira_amount",
        render: (amount) => `${amount ? `N${amount}` : "N/A"}`,
        width: "20%",
      },
      {
        title: "Dollar Amount",
        dataIndex: "dollar_amount",
        render: (amount) => `$${amount}`,
        width: "10%",
      },
      {
        title: "Crypto Type",
        dataIndex: "crypto_type",
        render: (type) => `${type}`,
        width: "10%",
      },
    ],
    []
  );
  const fetchData = (type) => {
    fetchTransaction(type)
      .unwrap()
      .then((result) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: result?.count,
            pageSize: result?.pagination?.totalItems,
          },
        });
      })
      .catch();
  };
  const [type, setType] = useState(options[0].value);
  useEffect(() => {
    fetchData(type);
  }, [JSON.stringify(tableParams), type]);
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
      <Select
        value={type}
        onSelect={(value) => {
          setType(value);
        }}
        options={options}
        defaultValue={options[0].value}
        className="!w-[10rem]"
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
          dataSource={result?.data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ x: 1000, y: 1200 }}
        />
      </ConfigProvider>
    </div>
  );
};
export default CryptoTable;
