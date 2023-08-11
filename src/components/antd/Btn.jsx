import { Button, ConfigProvider } from "antd";

export const Btn = ({ ...props }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#6C6AEB",
        colorPrimaryHover: "#f09654",
        colorBgContainerDisabled: "#6C6AEB",
      },
    }}
  >
    <Button {...props} style={{ backgroundColor: "#6C6AEB" }} />
  </ConfigProvider>
);
