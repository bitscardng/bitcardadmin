import React, { useEffect, useState } from "react";
import { robot } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import PasswordInput from "../components/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import { AsyncActions } from "../redux/actionTypes/auth.actionTypes";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { validateEmail } from "../constant/validators";
import { TiArrowForward } from "react-icons/ti";

const initialState = {
  email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const [check, setCheck] = useState(false);
  const { email, password } = formData;

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setCheck(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleCheckChange = (e) => {
    console.log(e.target.checked);
    setCheck((init) => !init);
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
    if (check) {
      localStorage.setItem("email", formData.email);
    } else if (!check) {
      localStorage.removeItem("email");
    }
    await dispatch(login(userData))
      .unwrap()
      .then((action) => {
        sessionStorage.setItem("token", action.data.tokens.accessToken);
        localStorage.setItem("refreshToken", action.data.tokens.refreshToken);
        toast.success("Enter verification Otp!");
        navigate("/sign-in-otp");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen hero">
      {auth.isLoading === AsyncActions.isLoading && <Loader />}
      <div className="flex-col gap-20 hero-content lg:flex-row-reverse">
        <img src={robot} className="max-w-md " />
        <div>
          <h1 className="text-5xl font-bold">BITSCARD</h1>
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
                      name="rememberMe"
                      onChange={handleCheckChange}
                      value={check}
                      checked={check}
                      id=""
                      className="checkbox checkbox-error"
                    />
                    <p>Remember me</p>
                  </div>
                </div>
                <button type="submit" className={`${styles.btn} ml-0`}>
                  Sign in
                </button>
                <Link
                  to="/forgot-password"
                  className="flex items-center gap-2 capitalize duration-300"
                >
                  <span>
                    <TiArrowForward />
                  </span>
                  <p className="btn-link">Forgot password</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
