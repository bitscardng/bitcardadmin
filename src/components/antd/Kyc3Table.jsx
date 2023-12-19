import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetKyc3Query,
  useVerifyKyc3Mutation,
  useDeclineKyc3Mutation,
  useDeclineKyc4Mutation,
  useVerifyKyc4Mutation,
} from "../../api/kycQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const Kyc3Table = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openApprove, setOpenApprove] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [id, setId] = useState("");
  const [verify, { isLoading: isVerifying }] = useVerifyKyc3Mutation();
  const [decline, { isLoading: isDeclining }] = useDeclineKyc3Mutation();
  const [verifyKyc4, { isLoading: isVerifyingKyc4 }] = useVerifyKyc4Mutation();
  const [declineKyc4, { isLoading: isDecliningKyc4 }] =
    useDeclineKyc4Mutation();
  const handleVerifyDetails = (id) => {
    console.log(id);
    verify(id)
      .unwrap()
      .then(() => {
        toast.success("kyc3 details approved");
        verifyKyc4(id)
          .unwrap()
          .then(() => {
            toast.success("kyc4 details approved");
          })
          .catch((err) => {
            toast.error(
              err.message ||
                err.msg ||
                err?.data?.message ||
                err?.data?.msg ||
                "an error occured"
            );
          });
      })
      .catch((err) => {
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
        toast.success("kyc3 details declined");
        declineKyc4(id)
          .unwrap()
          .then(() => {
            toast.success("kyc4 details declined");
          })
          .catch((err) => {
            toast.error(err.message || err.msg || "an error occured");
          });
      })
      .catch((err) => {
        toast.error(err.message || err.msg || "an error occured");
      });
  };
  const columns = useMemo(
    () => [
      {
        title: "Email",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "30%",
      },
      //   {
      //     title: "ID upload",
      //     dataIndex: "id_upload",
      //     render: (first_name) => `${first_name}`,
      //     width: "20%",
      //   },
      {
        title: "ID Number",
        dataIndex: "identity",
        render: (data) => `${data?.number}`,
        width: "20%",
      },
      {
        title: "ID Type",
        dataIndex: "identity",
        render: (data) => `${data?.type}`,
        width: "20%",
      },
      {
        title: "Selfie Image",
        dataIndex: "identity",
        render: (data) => <img src={data?.image} />,
        width: "20%",
      },
      {
        title: "country",
        dataIndex: "identity",
        render: (data) => `${data?.country}`,
        width: "20%",
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
  const { data: result = [], isLoading, refetch } = useGetKyc3Query();
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
export default Kyc3Table;
