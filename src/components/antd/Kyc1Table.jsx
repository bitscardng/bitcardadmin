import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetKyc1_2Query,
  useVerifyKyc1_2Mutation,
  useDeclineKyc1_2Mutation,
} from "../../api/kycQueries";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
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
        dataIndex: "passport_image",
        render: (last_name) => `${last_name}`,
        width: "20%",
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
        width: "40%",
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
export default Kyc1Table;
