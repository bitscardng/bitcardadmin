import React, { useEffect, useState, useMemo } from "react";
import qs from "qs";
import { Table } from "antd";
import ConfirmModal from "./ConfirmModal";
import {
  useGetPendingBuyTranxQuery,
  useAcceptBuyGiftCardMutation,
  useDeclineBuyGiftCardMutation,
} from "../../api/giftCardService";
import { ConfigProvider } from "antd";
import { toast } from "react-toastify";
import GiftCardMailModal from "./GiftCardMailModal";
import GiftCardSmsModal from "./GiftCardSmsModal";
const BuyGiftCardTable = () => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [openMail, setOpenMail] = useState(false);
  const [openSms, setOpenSms] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [cardData, setCardData] = useState({});
  const [buttonEnabled, setButtonEnabled] = useState({
    purchaseBtn: true,
    smsBtn: false,
    emailBtn: true,
  });
  const [id, setId] = useState("");
  const [verify, { isLoading: isVerifying }] = useAcceptBuyGiftCardMutation();
  const [decline, { isLoading: isDeclining }] = useDeclineBuyGiftCardMutation();
  const handleVerifyDetails = (id) => {
    verify({ id })
      .unwrap()
      .then(() => {
        toast.success("Gift Card approved");
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
    decline({ id })
      .unwrap()
      .then(() => {
        toast.success("Gift Card Declined");
      })
      .catch((err) => {
        toast.error(err.message || err.msg || "an error occured");
      });
  };
  const columns = useMemo(
    // eslint-disable-next-line no-sparse-arrays
    () => [
      {
        title: "Email",
        dataIndex: "email",
        render: (email) => `${email}`,
        width: "20%",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        render: (phone) => `${phone}`,
        width: "20%",
      },
      {
        title: "Gift Card",
        dataIndex: "gift_card",
        render: (type) => `${type}`,
        width: "20%",
      },
      {
        title: "Country",
        dataIndex: "country",
        render: (country) => `${country}`,
        width: "20%",
      },
      {
        title: "Card Type",
        dataIndex: "card_type",
        render: (type) => `${type}`,
        width: "10%",
      },
      {
        title: "Amount",
        dataIndex: "dollar_amount",
        render: (amount) => `${amount}$`,
        width: "10%",
      },
      {
        title: "Ngn Amount",
        dataIndex: "ngn_amount",
        render: (amount) => `N${amount}`,
        width: "10%",
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status) => (
          <div className="flex flex-col gap-[0.2rem]">
            {status?.pending && (
              <button
                onClick={() => {
                  setOpenDecline(true);
                  setId(id);
                }}
                className="bg-[#F7931A] rounded-[20px] font-[Poppins]"
              >
                Pending
              </button>
            )}
            {status?.processed && (
              <button
                onClick={() => {
                  setOpenDecline(true);
                  setId(id);
                }}
                className="bg-[#5FC88F] rounded-[20px] font-[Poppins]"
              >
                Processed
              </button>
            )}
            {status?.declined && (
              <button
                onClick={() => {
                  setOpenDecline(true);
                  setId(id);
                }}
                className="bg-[#FF6464] rounded-[20px] font-[Poppins]"
              >
                Declined
              </button>
            )}
          </div>
        ),
        width: "10%",
      },
      {
        title: "Transaction Date",
        dataIndex: "createdAt",
        render: (date) => {
          const newDate = new Date(date).toLocaleDateString();
          return `${newDate}`;
        },
        width: "10%",
      },

      // {
      //   title: "Receipt Image",
      //   dataIndex: "",
      //   fixed: "right",
      //   render: (id) => (
      //     <div className="flex flex-col gap-[0.2rem]">
      //       <button
      //         onClick={() => {
      //           setOpenDecline(true);
      //           setId(id);
      //         }}
      //         className="bg-[#767DFF] rounded-[20px] font-[Poppins]"
      //       >
      //         Preview
      //       </button>
      //     </div>
      //   ),
      //   width: "20%",
      // },
      {
        dataIndex: "_id",
        fixed: "right",
        render: (id, record) => (
          <div className="flex flex-col gap-[0.2rem]">
            <button
              disabled={buttonEnabled.purchaseBtn}
              onClick={() => {
                setOpenApprove(true);
                setId(id);
              }}
              className="bg-[#5FC88F] rounded-[20px] font-[Poppins] py-[5px]"
            >
              Purchase
            </button>
            <div className="w-full flex gap-[1.5rem] ml-6">
              <button
                onClick={() => {
                  setOpenSms(true);
                  setId(id);
                  setCardData(record);
                }}
                className="bg-[#767DFF] rounded-[20px] font-[Poppins] py-[3px] px-4"
              >
                SMS
              </button>
              <button
                onClick={() => {
                  setOpenMail(true);
                  setId(id);
                  setCardData(record);
                }}
                className="bg-[#FF6464] rounded-[20px] font-[Poppins] py-[3px] px-4"
              >
                Email
              </button>
            </div>
          </div>
        ),
        width: "20%",
      },
      ,
    ],
    []
  );
  const {
    data: result = [],
    isLoading,
    refetch,
  } = useGetPendingBuyTranxQuery({});
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
          scroll={{ x: 1800, y: 1200 }}
        />
        <div className="w-full justify-around">
          <p className="text-xl text-white ml-20">Processed Transaction</p>
        </div>
        <Table
          columns={columns}
          rowKey={(record) => record?._id}
          dataSource={result?.data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ x: 1800, y: 1200 }}
        />
      </ConfigProvider>
      {/* <ConfirmModal
        open={openApprove}
        setOpen={setOpenApprove}
        loading={isVerifying}
        action={handleVerifyDetails}
        data={id}
      >
        <p>Approve Gift Card</p>
      </ConfirmModal>
      <ConfirmModal
        open={openDecline}
        setOpen={setOpenDecline}
        loading={isDeclining}
        action={handleDeclineDetails}
        data={id}
      >
        <p>Decline Gift Card</p>
      </ConfirmModal> */}
      <GiftCardMailModal
        open={openMail}
        setOpen={setOpenMail}
        data={cardData}
      />
      <GiftCardSmsModal open={openSms} setOpen={setOpenSms} data={cardData} />
    </div>
  );
};
export default BuyGiftCardTable;
