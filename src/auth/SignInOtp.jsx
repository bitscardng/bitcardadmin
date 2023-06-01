import React, { useState } from "react";
import { robot } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";

const initialState = {
  email: "",
  password: "",
};

const SignInOtp = () => {
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md" />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please enter your Google 2FA code.</p>
            <form onSubmit={SignInOtp} className="pt-8">
              <div className="">
                <div className="flex gap-10 py-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                    <input
                      type="text"
                      className="w-10 h-10 text-center text-black bg-white rounded-lg outline-none"
                    />
                  </div>
                </div>
                <p className="py-2 font-thin text-left font-italic">
                  &nbsp; Don't have an account? &nbsp;
                </p>
                <Link
                  to="/sign-up"
                  className="text-white link-hover label-text-alt link"
                >
                  <p>Sign Up</p>
                </Link>
                <div className={`${styles.btn} ml-0`}>Sign in</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOtp;
