import React from "react";
import ReactDOM from "react-dom";
import { loaderImg } from "../assets";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed h-[100vh] w-[100vw] z-9 bg-[rgba(0,0,0,0.7)] hero">
      <div className="fixed  z-[999] translate[-50%, -50%] hero">
        <img src={loaderImg} alt="Loading..."  className="rounded-full "/>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className=" hero">
      <img src={loaderImg} alt="Loading..." className="rounded-full " />
    </div>
  );
};

export default Loader;
