import { Button, Modal } from "antd";
import {
  useDeleteNewsMutation,
  useLazyGetNewsByIdQuery,
} from "../../api/newsApiSlice";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import { useEffect } from "react";

function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}
const NewsModal = ({ open, setOpen, id }) => {
  const [getNews, { data, isLoading }] = useLazyGetNewsByIdQuery(id);
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
  useEffect(() => {
    if (id) getNews(id);
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
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(data?.data?.content) }}
      />
      <div className="flex justify-between items-center w-full">
        <span>Author: {data?.data?.author}</span>
      </div>
    </Modal>
  );
};

export default NewsModal;
