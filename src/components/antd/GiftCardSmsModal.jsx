import { Modal, Input, message, DatePicker } from "antd";
import { Btn as Button } from "./Btn";
import { useState } from "react";
import { useSendGiftCardSmsMutation } from "../../api/giftCardService";

const GiftCardSmsModal = ({ open, setOpen, data }) => {
  const [formData, setFormData] = useState({});
  const [sendSms, { isLoading }] = useSendGiftCardSmsMutation();
  return (
    <Modal
      centered
      maskClosable={false}
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendSms({
            ...formData,
            recipients: data?.phone,
          })
            .unwrap()
            .then(() => {
              message.success("sent");
              setOpen(false);
            })
            .catch((err) => {
              message.error(err?.message || "an error occured");
            });
        }}
        className="flex flex-col w-full gap-[0.5rem]"
      >
        <span className="flex flex-col">
          <label className="">Phone</label>
          <Input disabled value={data?.phone} />
        </span>
        <span className="flex flex-col">
          <label>message</label>
          <Input.TextArea
            value={formData.message}
            name="message"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </span>
        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          className="w-full"
        >
          Send
        </Button>
      </form>
    </Modal>
  );
};

export default GiftCardSmsModal;
