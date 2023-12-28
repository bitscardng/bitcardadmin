import React, { useEffect, useState, useMemo } from "react";
import { Table } from "antd";
import Search from "../Search";
import { useLazyGetTeleSalesQuery } from "../../api/tele-salesqueries";
import { ConfigProvider } from "antd";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailForward } from "react-icons/tb";
const TeleSalesTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);
  const increaseProgressBtn = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    } else {
      return setProgress(progress - 100);
    }
  };
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns = useMemo(
    () => [
      {
        title: "Email",
        dataIndex: "email",
        render: (email) => (
          <div className="flex flex-col">
            <p>{email}</p>
            <Link
              to="/telesales/sendemail"
              className={`${styles.btn} flex items-center justify-between `}
            >
              <span>
                <TbMailForward />
              </span>
              Send email
            </Link>
          </div>
        ),
        width: "12%",
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        render: (phone) => (
          <div className="flex flex-col">
            <p className="px-1">{phone}</p>
            <button
              onClick={increaseProgressBtn}
              className={`${styles.btn} flex items-center justify-between`}
            >
              <span className="pr-2">
                <FiPhoneCall />
              </span>
              Customer
            </button>
          </div>
        ),
        width: "12%",
      },
      {
        title: "username",
        dataIndex: "username",
        render: (username) => `${username}`,
      },
      {
        title: "KYC 1&2",
        dataIndex: "kyc_status",
        render: (kyc) => `${kyc?.kyc1and2 || "N/A"}`,
      },
      {
        title: "KYC 3",
        dataIndex: "kyc_status",
        render: (kyc) => `${kyc?.kyc3 || "N/A"}`,
      },
      {
        title: "Account Status",
        dataIndex: "kyc_status",
        render: (kyc) =>
          `${kyc?.creatAccount === "No" ? "Not Created" : "Created"}`,
      },
      {
        title: "Joined Date",
        dataIndex: "joined_date",
        render: (date) => `${new Date(date).toDateString()}`,
      },
      {
        title: "Preview",
        dataIndex: "_id",
        fixed: "right",
        render: (id) => (
          <Link to={`/user-details/${id}`}>
            <p className="bg-[green] p-1 rounded-lg cursor-pointer hover:font-normal duration-500 text-center">
              Details
            </p>
          </Link>
        ),
      },
      ,
    ],
    []
  );
  const [fetchTeleSales, { data: result, isLoading }] =
    useLazyGetTeleSalesQuery();
  const fetchData = (query) => {
    fetchTeleSales(query)
      .then((result) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: result?.data?.pagination?.totalItems,
            // pageSize: result?.pagination?.totalItems,
          },
        });
      })
      .catch();
  };

  useEffect(() => {
    fetchData({
      searchQuery: search,
      page: tableParams.pagination.current,
      ...tableParams.pagination,
    });
  }, [JSON.stringify(tableParams), search]);
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <div className="capitalize ">
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
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
          scroll={{ x: 1500, y: 1200 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default TeleSalesTable;
