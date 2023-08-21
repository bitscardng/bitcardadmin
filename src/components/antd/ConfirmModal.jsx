import { Modal, ConfigProvider } from "antd";
const ConfirmModal = ({
  open,
  setOpen,
  loading,
  children,
  action,
  data,
  ...props
}) => {
  const handleOk = () => {
    action(data);
    !loading && setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <ConfigProvider>
      <Modal
        title="Confirm Action"
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
        maskClosable={false}
        centered={true}
        okButtonProps={{ style: { backgroundColor: "#191c32" } }}
        {...props}
      >
        {children}
      </Modal>
    </ConfigProvider>
  );
};
export default ConfirmModal;
