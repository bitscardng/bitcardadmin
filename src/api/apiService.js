import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BITSCARD_BACKEND_URL,
});

const postApi = (url, body) => {
  return api.post(url, body, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  });
};

const getApi = (url, body) => {
  return api.get(url, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  });
};

export {postApi,getApi}