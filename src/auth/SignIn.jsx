import React, { useState } from "react";
import { robot } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";
import { useDispatch } from "react-redux";
import {
  loginAdmin,
  validateEmail,
} from "../redux/features/services/authService";
import { SET_LOGIN, SET_NAME } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter a valid email and password");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = { email, password };

    setIsLoading(true);
    try {
      const data = await loginAdmin(userData);
      // console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div class="hero min-h-screen">
      {isLoading && <Loader />}
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md " />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please fill your detail to access your account.</p>
            <form onSubmit={login} className="pt-8">
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
                <button type="submit" className={`${styles.btn} ml-0`}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
