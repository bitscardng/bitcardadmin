import ConfirmModal from "./ConfirmModal";
import { HiOutlineMail } from "react-icons/hi";

const WithdrawalDetailsModal = ({ open, setOpen, id }) => {
  return (
    <ConfirmModal open={open} setOpen={setOpen} title="" footer={null}>
      <div className="flex flex-col w[28rem]">
        <p className="pb-2 text-2xl font-bold text-center">User Transaction</p>
        <div className="flex flex-col font-thin text-[#9395A4]">
          <div className="flex items-center w-full gap-3 p-2 px-4 my-2 rounded-full bg-sec">
            <div className="flex flex-row items-center gap-2 text-center">
              <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                <HiOutlineMail className="text-[#5ec88f]" />
              </div>
              <p>Email</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 rounded-2xl bg-sec">
            <p className="p-2 pl-4 rounded-full bg-primary">{"xvalzs"}</p>
            <p className="p-2 pl-4 rounded-full bg-primary">
              Balance : ${"400"}
            </p>
            <div className="p-4 py-8 rounded-2xl bg-primary">
              <h5>Transaction History</h5>
              <div className="pt-4">
                <div className="flex items-center justify-between text-center">
                  <p>{"Netflix"}</p>
                  <p>{"$100"}</p>
                  <p>{"23/12/2023  20:10"}</p>
                </div>
                <div className="flex items-center justify-between text-center">
                  <p>{"Netflix"}</p>
                  <p>{"$100"}</p>
                  <p>{"23/12/2023  20:10"}</p>
                </div>
                <div className="flex items-center justify-between text-center">
                  <p>{"Netflix"}</p>
                  <p>{"$100"}</p>
                  <p>{"23/12/2023  20:10"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfirmModal>
  );
};

export default WithdrawalDetailsModal;
