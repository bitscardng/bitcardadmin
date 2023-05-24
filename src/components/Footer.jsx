import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full p-2 footer footer-center bg-sec">
      <div>
        <p className="flex items-center justify-center">
          Copyright © 2023 - All right reserved by
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="w-8 h-8 m-1" />
            Bitscard
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
