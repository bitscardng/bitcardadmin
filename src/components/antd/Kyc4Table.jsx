import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetKyc4Query,
  useVerifyKyc4Mutation,
  useDeclineKyc4Mutation,
} from "../../api/kycQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const Kyc4Table = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openApprove, setOpenApprove] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [id, setId] = useState("");
  const [verify, { isLoading: isVerifying }] = useVerifyKyc4Mutation();
  const [decline, { isLoading: isDeclining }] = useDeclineKyc4Mutation();
  const handleVerifyDetails = (id) => {
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
        title: "occupation",
        dataIndex: "meta",
        render: ({ occupation }) => `${occupation}`,
        width: "20%",
      },
      {
        title: "Utility Bill",
        dataIndex: "meta",
        render: ({ utility_bill }) => (
          <a href={utility_bill} download>
            {utility_bill}
          </a>
        ),
        width: "20%",
      },
      {
        title: "Account Statement",
        dataIndex: "meta",
        render: ({ bank_statement }) => (
          <a href={bank_statement} download>
            {bank_statement}
          </a>
        ),
        width: "20%",
      },
      {
        title: "ID Type",
        dataIndex: "meta",
        render: ({ identity_type }) => `${identity_type}`,
        width: "30%",
      },
      {
        title: "ID Number",
        dataIndex: "meta",
        render: ({ identity_number }) => `${identity_number}`,
        width: "40%",
      },
      {
        title: "Issued Date/Expiry Date",
        dataIndex: "meta",
        render: ({ identity_issued_date, identity_expiration }) =>
          `${identity_issued_date + "/" + identity_expiration}`,
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
  const { data: result = [], isLoading, refetch } = useGetKyc4Query();
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
          scroll={{ x: 2000, y: 1200 }}
        />
      </ConfigProvider>
      <ConfirmModal
        open={openApprove}
        setOpen={setOpenApprove}
        loading={isVerifying}
        text={"Approve kyc details"}
        action={handleVerifyDetails}
        data={id}
      />
      <ConfirmModal
        open={openDecline}
        setOpen={setOpenDecline}
        loading={isDeclining}
        text={"Decline kyc details"}
        action={handleDeclineDetails}
        data={id}
      />
    </>
  );
};
export default Kyc4Table;
