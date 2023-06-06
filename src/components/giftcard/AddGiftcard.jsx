import React from "react";
import { styles } from "../../styles";

const AddGiftcard = () => {
  return (
    <div>
      <p className={`${styles.topic} mb-0`}>add new gift card</p>
      <div className="flex items-center justify-between p-2">
        <p className="text-2xl font-bold text-end">Add Rate</p>
        <div className="flex items-center justify-between gap-8">
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            RMD :{" "}
            <span className="text-xl font-semibold text-center text-white">
              {"107"}
            </span>
          </p>
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            Profit :{" "}
            <span className="text-xl font-semibold text-center text-white">
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
