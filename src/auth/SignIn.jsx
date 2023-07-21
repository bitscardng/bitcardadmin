import React, { useState } from "react";
import { robot } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdmin,
  validateEmail,
} from "../redux/features/services/authService";
import { SET_LOGIN, SET_NAME } from "../redux/features/auth/authSlice";
import { login } from "../redux/actions/auth.actions";
import { loginActions } from "../redux/actionTypes/auth.actionTypes";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter a valid email and password");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    const userData = { email, password };
    await dispatch(login(userData))
      .unwrap()
      .then((action) => {
        toast.success("Login successfull!");
        navigate("/dashboard");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  return (
    <div class="hero min-h-screen">
      {auth.isLoading === loginActions.isLoading && <Loader />}
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md " />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please fill your detail to access your account.</p>
            <form onSubmit={handleSubmit} className="pt-8">
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
