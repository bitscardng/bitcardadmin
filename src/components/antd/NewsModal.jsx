import { AiOutlineLike } from "react-icons/ai";
import { Button, Modal } from "antd";
import {
  useGetNewsByIdQuery,
  useDeleteNewsMutation,
} from "../../api/newsApiSlice";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}
const NewsModal = ({ open, setOpen, id }) => {
  const { data, isLoading } = useGetNewsByIdQuery(id);
  const [clear, { isLoading: isDeleting }] = useDeleteNewsMutation();
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
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(data?.data?.content) }}
      />
      <div className="flex justify-between items-center w-full">
        <span>Author: {data?.data?.author}</span>
      </div>
    </Modal>
  );
};

export default NewsModal;
