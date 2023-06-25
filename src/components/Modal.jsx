import React, { useState } from "react";
import { styles } from "../styles";

const Modal = ({ closeModal }) => {
  return (
    <div
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)]"
      id="modal-container"
      onClick={(e) => {
        if (e.target.id === "modal-container") closeModal();
      }}
    >
      <div className="p-[2rem] w-[25em] rounded-2xl bg-white text-black">
        <h2 className={styles.topic}>Edit page</h2>
        <form
          action=""
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="">Buying</span>
            </label>
            <input
              type="text"
              placeholder="Buying"
              className="bg-white border border-black input"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Selling</span>
            </label>
            <input
              type="text"
              placeholder="Selling"
              className="bg-white border border-black input"
            />
          </div>

          <button type="submit" className={`${styles.btn}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
