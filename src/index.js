import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <ConfigProvider theme={{components:{Tabs:{inkBarColor:""}}}}>
      <div className="text-white bg-primary">
        <App />
      </div>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
