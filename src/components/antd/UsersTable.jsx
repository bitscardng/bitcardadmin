import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import { useGetUsersQuery } from "../../api/usersQueries";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";


const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});


const UsersTable = () => {
  const navigate = useNavigate();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns = useMemo(
    () => [
      {
        title: "Username",
        dataIndex: "username",
        render: (username) => `${username}`,
        width: "20%",
      },
      {
        title: "Email",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "30%",
      },
      {
        title: "Joined",
        dataIndex: "createdAt",
        render: (date) => `${new Date(date).toDateString()}`,
        width: "20%",
      },
      {
        title: "Virtual card Balance",
        dataIndex: "card_balance",
        render: (balance) => `${balance || "N/A"}`,
        width: "20%",
      },
      {
        title: "Usd Balance",
        dataIndex: "usd_balance",
        render: (balance) => `${balance || "N/A"}`,
        width: "20%",
      },
      {
        title: "Naira Balance",
        dataIndex: "ngn_balance",
        render: (balance) => `${balance || "N/A"}`,
        width: "20%",
      },
      {
        title: "Verified",
        dataIndex: "status",
        render: (status) => `${status || "N/A"}`,
        width: "10%",
      },
      {
        title: "Preview",
        dataIndex: "_id",
        fixed: "right",
        render: (id) => (
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate(`/user-details/${id}`);
              }}
              className="bg-[rgb(95,200,143)] rounded-[20px] font-[Poppins] px-[1rem] py-[0.5rem]"
            >
              Details
            </button>
          </div>
        ),
        width: "10%",
      },
      ,
    ],
    []
  );
  const { data: result = [], isLoading, refetch } = useGetUsersQuery();
  const fetchData = () => {
    const params = qs.stringify(getRandomuserParams(tableParams));
    refetch()
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

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
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
          dataSource={result?.data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ x: 2000, y: 1200 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default UsersTable;
