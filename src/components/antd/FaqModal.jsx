import { Button, Modal } from "antd";
import {
  useDeleteFaqMutation,
  useLazyGetFaqByIdQuery,
} from "../../api/faqSlice";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import { useEffect } from "react";

function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}
const FaqModal = ({ open, setOpen, id }) => {
  const [getFaq, { data, isLoading }] = useLazyGetFaqByIdQuery(id);
  const [clear, { isLoading: isDeleting }] = useDeleteFaqMutation();
  const handleOk = () => {
    clear(id)
      .unwrap()
      .then(() => {
        toast.success("deleted");
        setOpen(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  useEffect(() => {
    if (id) getFaq(id);
  }, [id]);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={<p>{data?.data?.title}</p>}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      confirmLoading={isDeleting}
      maskClosable={false}
      footer={
        <Button loading={isDeleting} onClick={handleOk} type="primary" danger>
          Delete
        </Button>
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(
            data?.data?.content.replace(
              'style="color: rgb(255,255,255);"',
              'style="color: rgb(0,0,0);"'
            )
          ),
        }}
      />
      <div className="flex justify-between items-center w-full">
        <span>Author: {data?.data?.author}</span>
      </div>
    </Modal>
  );
};

export default FaqModal;
