import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BITSCARD_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//login user
export const loginAdmin = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/auth/admin-login`,
      userData
    );

    if (response.statusText === "OK") {
      toast.success("Login Successfully...");
    }
    return response.data;
  } catch (error) {
    //getting error message from backend
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//logout user
export const logoutAdmin = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/v1/auth/admin-logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//get login status
export const adminRefresh = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/auth/refresh`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
