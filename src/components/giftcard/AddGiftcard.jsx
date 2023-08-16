import React, { useState } from "react";
import { styles } from "../../styles";
import { BsPen } from "react-icons/bs";

const AddGiftcard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([]);

  const handleSubmit = (newFormState) => {
    setAmount(...amount, newFormState);
  };
  return (
    <div className="capitalize">
      <p className={`${styles.topic} mb-0`}>add new gift card</p>
      <div className="flex items-center justify-between p-2">
        <p className="text-2xl font-bold text-end">Add Rate</p>
        <div className="flex items-center justify-between gap-8">
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            RMD :
            <span className="pl-2 text-xl font-semibold text-center text-white">
              {"107"}
            </span>
          </p>
          <div
            className={`${styles.btn} max-w-fit px-10 `}
            // onClick={() => setModalOpen(true)}
          >
            Edit
          </div>
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            Profit :
            <span className="pl-2 text-xl font-semibold text-center text-white">
              {"30"}
            </span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddGiftcard;
