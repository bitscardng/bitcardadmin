import { Modal, ConfigProvider } from "antd";
const ConfirmModal = ({ open, setOpen, loading, text, action, data }) => {
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
        centered={true}
        okButtonProps={{ style: { backgroundColor: "#191c32" } }}
      >
        <p>{text}</p>
      </Modal>
    </ConfigProvider>
  );
};
export default ConfirmModal;
