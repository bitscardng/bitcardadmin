import React, { useEffect, useState } from "react";
import qs from "qs";
import { Table } from "antd";
import { useGetKyc1_2Query } from "../../api/kycQueries";
import { ConfigProvider } from "antd";
const columns = [
  {
    // title: "Passport Image",
    dataIndex: "passport_image",
    render: (last_name) => `${last_name}`,
    width: "20%",
  },
  {
    title: "country",
    dataIndex: "country",
    render: (country) => `${country}`,
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
    dataIndex: "phone_number",
    render: (phone_number) => `${phone_number}`,
    width: "30%",
  },
  {
    title: "Address",
    dataIndex: "last_name",
    render: (last_name) => `${last_name}`,
    width: "20%",
  },
  {
    title: "BVN",
    dataIndex: "bvn",
    render: (bvn) => `${bvn}`,
    width: "20%",
  },
  {
    title: "Postal Code",
    dataIndex: "postal_code",
    render: (postal_code) => `${postal_code}`,
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "_id",
    fixed: "right",
    render: (id) => (
      <div className="flex flex-col gap-[0.2rem]">
        <button className="bg-[#FF6464] rounded-[20px] font-[Poppins]">
          Decline
        </button>
        <button className="bg-[#5FC88F] rounded-[20px] font-[Poppins]">
          Approve
        </button>
      </div>
    ),
    width: "20%",
  },
  ,
];
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
  const { data: result = [], isLoading, refetch } = useGetKyc1_2Query();
  const fetchData = () => {
    const params = qs.stringify(getRandomuserParams(tableParams));
    refetch(params)
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
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#191c32",
          colorSplit: "#282c4a",
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
        rowKey={(record) => record.login.uuid}
        dataSource={result?.data}
        pagination={tableParams.pagination}
        loading={isLoading}
        onChange={handleTableChange}
        scroll={{ x: 1600, y: 1200 }}
      />
    </ConfigProvider>
  );
};
export default Kyc1Table;
