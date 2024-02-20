import { Modal, Input, message, DatePicker } from "antd";
import { Btn as Button } from "./Btn";
import { useState } from "react";
import { useSendGiftCardMailMutation } from "../../api/giftCardService";

const GiftCardMailModal = ({ open, setOpen, data }) => {
  const [formData, setFormData] = useState({});
  const [sendMail, { isLoading }] = useSendGiftCardMailMutation();
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
          sendMail({
            ...formData,
            email: data?.email,
            amount: JSON.stringify(data?.ngn_amount),
            country: data?.country,
            card_name: data?.gift_card,
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
          <label className="">Title</label>
          <Input
            name="title"
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </span>
        <span className="flex flex-col">
          <label>email</label>
          <Input value={data?.email} disabled />
        </span>
        <span className="flex flex-col">
          <label>card name</label>
          <Input value={data?.gift_card} disabled />
        </span>
        <span className="flex flex-col">
          <label>card code</label>
          <Input
            name="card_code"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          />
        </span>
        <span className="flex flex-col">
          <label>country</label>
          <Input value={data?.country} disabled />
        </span>
        <span className="flex flex-col">
          <label>amount</label>
          <Input value={JSON.stringify(data?.ngn_amount)} prefix="NGN" disabled />
        </span>
        <span className="flex flex-col">
          <label>expiration date</label>
          <DatePicker
            onChange={(value) =>
              setFormData({ ...formData, expiration_date: value })
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

export default GiftCardMailModal;
