import React from "react";
import ReactDOM from "react-dom";
import { loaderImg } from "../assets";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed h-[100vh] w-[100vw] z-9 bg-[rgba(0,0,0,0.7)]">
      <div className="fixed l-[50%] t-[50%] z-[999] translate[-50%, -50%]">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
