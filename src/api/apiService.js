import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BITSCARD_BACKEND_URL,
});

api.interceptors.response.use(undefined, function (error) {
  if (error.response?.status === 401) {
    const config = error.response.config;
    axios
      .get(`${process.env.REACT_APP_BITSCARD_BACKEND_URL}/auth/refresh`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
        },
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        return axios(config);
      })
      .catch();
  }
  return Promise.reject(error);
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

export { postApi, getApi };
