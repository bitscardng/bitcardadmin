import React, { useState } from "react";
import { styles } from "../styles";

const Modal = ({ closeModal, onSubmit }) => {
  const [formState, setFormState] = useState({
    buy: "",
    sell: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

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
            <label htmlFor="buy" className="label">
              <span className="">Buying Profit</span>
            </label>
            <input
              type="number"
              placeholder="Buying"
              name="buy"
              value={formState.buy}
              onChange={handleChange}
              className="bg-white border border-black outline-none input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="sell" className="label">
              <span className="">Selling Profit</span>
            </label>
            <input
              type="number"
              placeholder="Selling"
              name="sell"
              value={formState.sell}
              onChange={handleChange}
              className="bg-white border border-black outline-none input"
            />
          </div>

          <button
            type="submit"
            className={`${styles.btn}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
