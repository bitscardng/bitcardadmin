import React from "react";
import { styles } from "../styles";
import Email1 from "./Email1";

const Modal = () => {
  return (
    <div className="relative mt-6">
      <div>
        <label for="tw-modal" className={styles.btn}>
          preview
        </label>
      </div>
      <input
        type="checkbox"
        id="tw-modal"
        className="opacity-0 appearance-none peer"
      />

      <label
        for="tw-modal"
        className="fixed inset-0 flex items-center justify-center mt-32 overflow-y-scroll backdrop-blur-sm"
      >
        <div className="overflow-y-scroll">
          <Email1 />
        </div>
      </label>
    </div>
  );
};

export default Modal;
