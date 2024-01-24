import React, { useEffect, useState, useMemo } from "react";
import { Table } from "antd";
import WithdrawalDetailsModal from "./withdrawalDetailsModal";
import { useNgnWithdrawalsQuery } from "../../api/withdrawalQueries";
import { ConfigProvider } from "antd";

const NgnWithdrawalTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [preview, setPreview] = useState(false);
  const [detailsParam, setDetailsParam] = useState({
    email: '',
    id: '',
  });
  const columns = useMemo(
    () => [
      {
        title: "Email Address",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "25%",
      },
      {
        title: "Username",
        dataIndex: "username",
        render: (username) => `${username}`,
        width: "15%",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (amount) => `${amount}`,
        width: "15%",
      },
      {
        title: "Details",
        render: (_, record) => (
          <div className="flex flex-col gap-[0.2rem]">
            <button
              onClick={() => {
                setDetailsParam({
                  email: record.email,
                  id: record._id
                })
                setPreview(true);
              }}
              className="bg-[#F7931A] rounded-[20px] font-[Poppins]"
            >
              Preview receiver details
            </button>
          </div>
        ),
        width: "20%",
      },
      {
        title: "Date",
        dataIndex: "createdAt",
        render: (date) =>
          `${new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}`,
        width: "20%",
      },
      {
        title: "Status",
        dataIndex: "status",
        fixed: "status",
        render: (status) => (
          <div className="flex flex-col gap-[0.2rem]">
            {!status?.approve ? (
              <span className="bg-[#FF6464] text-center rounded-[20px] font-[Poppins]">
                Declined
              </span>
            ) : (
              <span className="bg-[#5FC88F] text-center rounded-[20px] font-[Poppins]">
                Approved
              </span>
            )}
          </div>
        ),
        width: "20%",
      },
      ,
    ],
    []
  );
  const { data: result = [], isLoading, refetch } = useNgnWithdrawalsQuery();
  const fetchData = () => {
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
    <>
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
      <WithdrawalDetailsModal open={preview} setOpen={setPreview} email={detailsParam.email} id={detailsParam.id} />
    </>
  );
};

export default NgnWithdrawalTable;
