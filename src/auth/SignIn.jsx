import React, { useState } from "react";
import { robot } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md " />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please fill your detail to access your account.</p>
            <form onSubmit={SignIn} className="pt-8">
              <div className="p-2">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="abc@example.com"
                  className="w-full p-3 my-2 border rounded-full bg-primary"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-2">
                <p>Password</p>
                <div>
                  <PasswordInput
                    children="Password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-row items-center justify-between py-2">
                  <div className="flex flex-row gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      class="checkbox checkbox-error"
                    />
                    <p>Remember me</p>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-white label-text-alt link link-hover"
                  >
                    <p>Forgot Password?</p>
                  </Link>
                </div>
                <div className={`${styles.btn} ml-0`}>Sign in</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
