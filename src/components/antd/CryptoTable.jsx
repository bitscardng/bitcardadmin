import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetKyc1_2Query,
  useVerifyKyc1_2Mutation,
  useDeclineKyc1_2Mutation,
} from "../../api/kycQueries";
import {
  useGetTransferListQuery,
  useApproveTransferMutation,
  useDeclineTransferMutation,
} from "../../api/cryptoQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const CryptoTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openApprove, setOpenApprove] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [id, setId] = useState("");
  const [verify, { isLoading: isVerifying }] = useVerifyKyc1_2Mutation();
  const [decline, { isLoading: isDeclining }] = useDeclineKyc1_2Mutation();
  const handleVerifyDetails = (id) => {
    console.log(id);
    verify(id)
      .unwrap()
      .then(() => {
        toast.success("kyc details approved");
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
        toast.success("kyc details approved");
      })
      .catch((err) => {
        toast.error(err.message || err.msg || "an error occured");
      });
  };
  const columns = useMemo(
    () => [
      {
        title: "email",
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
        title: "Wallet Address",
        dataIndex: "wallet_address",
        render: (address) => `${address}`,
        width: "20%",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (amount) => `${amount}`,
        width: "20%",
      },
      {
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
  const { data: result = [], isLoading, refetch } = useGetTransferListQuery();
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
          scroll={{ x: 1000, y: 1200 }}
        />
      </ConfigProvider>
      <ConfirmModal
        open={openApprove}
        setOpen={setOpenApprove}
        loading={isVerifying}
        action={handleVerifyDetails}
        data={id}
      >
        <p>Approve Crypto Transaction</p>
      </ConfirmModal>
      <ConfirmModal
        open={openDecline}
        setOpen={setOpenDecline}
        loading={isDeclining}
        action={handleDeclineDetails}
        data={id}
      >
        <p>Decline Crypto Transaction</p>
      </ConfirmModal>
    </>
  );
};
export default CryptoTable;
