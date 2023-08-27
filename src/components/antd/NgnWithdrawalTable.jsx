import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import WithdrawalDetailsModal from "./withdrawalDetailsModal";
import {
  useNgnWithdrawalsQuery,
  useApprovengnWithdrawalsMutation,
  useDeclinengnWithdrawalsMutation,
} from "../../api/withdrawalQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const NgnWithdrawalTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openApprove, setOpenApprove] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [preview, setPreview] = useState(false);
  const [id, setId] = useState("");
  const [verify, { isLoading: isVerifying }] =
    useApprovengnWithdrawalsMutation();
  const [decline, { isLoading: isDeclining }] =
    useDeclinengnWithdrawalsMutation();
  const handleVerifyDetails = (id) => {
    console.log(id);
    verify(id)
      .unwrap()
      .then(() => {
        toast.success("withdrawal approved");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.message ||
            err.msg ||
            err?.data?.message ||
            err?.data?.msg ||
            "an error occured"
        );
      });
  };
  const handleDeclineDetails = (id) => {
    console.log(id);
    decline(id)
      .unwrap()
      .then(() => {
        toast.success("withdrawal declined");
      })
      .catch((err) => {
        toast.error(err.message || err.msg || "an error occured");
      });
  };
  const columns = useMemo(
    () => [
      {
        title: "Email Address",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "20%",
      },
      {
        title: "Username",
        dataIndex: "username",
        render: (username) => `${username}`,
        width: "20%",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (amount) => `${amount}`,
        width: "20%",
      },
      {
        title: "Details",
        dataIndex: "_id",
        render: () => (
          <div className="flex flex-col gap-[0.2rem]">
            <button
              onClick={() => {
                setPreview(true);
                setId(id);
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
        dataIndex: "date",
        render: (date) => `${date}`,
        width: "30%",
      },
      {
        title: "Status",
        dataIndex: "_id",
        fixed: "right",
        render: (id) => (
          <div className="flex flex-col gap-[0.2rem]">
            <button
              onClick={() => {
                setOpenDecline(true);
                setId(id);
              }}
              className="bg-[#FF6464] rounded-[20px] font-[Poppins]"
            >
              Decline
            </button>
            <button
              onClick={() => {
                setOpenApprove(true);
                setId(id);
              }}
              className="bg-[#5FC88F] rounded-[20px] font-[Poppins]"
            >
              Approve
            </button>
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

    // // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
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
          scroll={{ x: 1500, y: 1200 }}
        />
      </ConfigProvider>
      <ConfirmModal
        open={openApprove}
        setOpen={setOpenApprove}
        loading={isVerifying}
        text={"Approve Withdrawal"}
        action={handleVerifyDetails}
        data={id}
      />
      <ConfirmModal
        open={openDecline}
        setOpen={setOpenDecline}
        loading={isDeclining}
        text={"Decline Withdrawal"}
        action={handleDeclineDetails}
        data={id}
      />
      <WithdrawalDetailsModal open={preview} setOpen={setPreview} id={id} />
    </>
  );
};

export default NgnWithdrawalTable;
