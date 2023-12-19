import React, { useEffect, useState, useMemo } from "react";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetKyc1_2Query,
  useVerifyKyc1Mutation,
  useVerifyKyc2Mutation,
  useDeclineKyc1_2Mutation,
} from "../../api/kycQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const Kyc1Table = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openApprove, setOpenApprove] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [id, setId] = useState("");
  const [verifyKyc1, { isLoading: isVerifyingKyc1 }] = useVerifyKyc1Mutation();
  const [declineKyc, { isLoading: isDecliningKyc }] =
    useDeclineKyc1_2Mutation();
  const [verifyKyc2, { isLoading: isVerifyingKyc2 }] = useVerifyKyc2Mutation();
  const handleVerifyDetails = (id) => {
    console.log(id);
    verifyKyc1(id)
      .unwrap()
      .then(() => {
        toast.success("kyc1 details approved");
        verifyKyc2(id)
          .unwrap()
          .then(() => {
            toast.success("kyc2 details approved");
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
    declineKyc(id)
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
        render: (_, record, index) => `${index + 1}`,
        width: "5%",
      },
      {
        title: "country",
        dataIndex: "address",
        render: (address) => `${address.country}`,
        width: "20%",
      },
      {
        title: "First Name",
        dataIndex: "first_name",
        render: (first_name) => `${first_name}`,
        width: "20%",
      },
      {
        title: "Last Name",
        dataIndex: "last_name",
        render: (last_name) => `${last_name}`,
        width: "20%",
      },
      {
        title: "Email Address",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "30%",
      },
      {
        title: "Date of Birth",
        dataIndex: "dob",
        render: (dob) => `${dob}`,
        width: "20%",
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        render: ({ phone_number, phone_country_code }) =>
          `${phone_country_code + phone_number}`,
        width: "30%",
      },
      {
        title: "Address",
        dataIndex: "address",
        render: ({ street, city, state }) =>
          `${street + "," + city + "," + state}`,
        width: "30%",
      },
      {
        title: "BVN",
        dataIndex: "bvn",
        render: (bvn) => `${bvn}`,
        width: "30%",
      },
      {
        title: "Postal Code",
        dataIndex: "address",
        render: ({ postal_code }) => `${postal_code}`,
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
  const { data: result = [], isLoading, refetch } = useGetKyc1_2Query();
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
          scroll={{ x: 2000, y: 1200 }}
        />
      </ConfigProvider>
      <ConfirmModal
        open={openApprove}
        setOpen={setOpenApprove}
        loading={isVerifyingKyc1 || isVerifyingKyc2}
        text={"Approve kyc details"}
        action={handleVerifyDetails}
        data={id}
      />
      <ConfirmModal
        open={openDecline}
        setOpen={setOpenDecline}
        loading={isDecliningKyc}
        text={"Decline kyc details"}
        action={handleDeclineDetails}
        data={id}
      />
    </>
  );
};
export default Kyc1Table;
