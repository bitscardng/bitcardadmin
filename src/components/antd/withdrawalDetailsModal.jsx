import ConfirmModal from "./ConfirmModal";
import { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useGetWithdrawalInfoQuery } from "../../api/withdrawalQueries";
import { Spin } from "antd";

const WithdrawalDetailsModal = ({ open, setOpen, email, id }) => {
  const [skip, setSkip] = useState(true);
  const { data, isLoading } = useGetWithdrawalInfoQuery({ id, email }, { skip: skip });
  useEffect(() => {
    if (email && id) setSkip(false);
  }, [email, id]);
  return (
    <ConfirmModal open={open} setOpen={setOpen} title="" footer={null}>
      {
        isLoading ? (
          <div className="flex flex-col items-center justify-start h-full">
            <Spin size="large" />
          </div>
        ) : (
          <div className="flex flex-col w[28rem]">
            <p className="pb-2 text-2xl font-bold text-center">User Withdrawal Info</p>
            <div className="flex flex-col font-thin text-[white]">
              <div className="flex items-center w-full gap-3 p-2 px-4 my-2 rounded-full bg-sec">
                <div className="flex flex-row items-center gap-2 text-center">
                  <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                    <HiOutlineMail className="text-[#5ec88f]" />
                  </div>
                  <p>Email</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 rounded-2xl bg-sec">
                <p className="p-2 pl-4 rounded-full bg-primary">{data?.data?.user?.username}</p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Balance : ₦ {Number(data?.data.balance?.balance.toFixed(2)).toLocaleString('en-US')}
                </p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Reference : {data?.data?.details?.reference}
                </p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Account Number: {data?.data?.details?.bank_details?.account_number}
                </p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Account Name: {data?.data?.details?.bank_details?.account_name}
                </p>
                <p className="p-2 pl-4 rounded-full bg-primary">
                  Bank Name: {data?.data?.details?.bank_details?.bank_name[0].name}
                </p>
                <div className="p-4 py-8 rounded-2xl bg-primary">
                  <h5>Withdrawal History</h5>
                  <div className="pt-4">
                    {
                      data?.data?.transactions.map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between text-center">
                          <p>{transaction?.reference_id.substring(0, 10)}</p>
                          <p>₦ {Number(transaction?.amount.toFixed(2)).toLocaleString('en-US')}</p>
                          <p>{new Date(transaction?.createdAt).toLocaleDateString("en-US", {month: "short", day: "2-digit", year: "numeric"})}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </ConfirmModal>
  );
};

export default WithdrawalDetailsModal;
