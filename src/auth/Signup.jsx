import React, { useState } from "react";
import { robot } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const SignUp = () => {
  const [formData, setformData] = useState(initialState);
  const { name, email, password, password2 } = formData;

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
            <p>Please fill your detail to have an account.</p>
            <form onSubmit={SignUp} className="pt-8">
              <div className="p-2">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 my-2 border rounded-full bg-primary"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
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
              <div className="p-2 ">
                <div>
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
                </div>
                <div>
                  <p>Confirm Password</p>
                  <div>
                    <PasswordInput
                      children="Password"
                      placeholder="Password"
                      name="password2"
                      value={password2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Link
                  to="/"
                  className="text-white link-hover label-text-alt link"
                >
                  <p>Home</p>
                </Link>
                <p className="py-2 font-thin text-left font-italic">
                  &nbsp; Already have an account? &nbsp;
                </p>
                <Link
                  to="/sign-in"
                  className="text-white link-hover label-text-alt link"
                >
                  <p>Sign In</p>
                </Link>
                <div className={`${styles.btn} ml-0`}>Sign up</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
