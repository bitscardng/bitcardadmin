import React, { useState } from "react";
import { styles } from "../../styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiMail } from "react-icons/fi";
import DOMPurify from "dompurify";
import { Btn as Button } from "../antd/Btn";
import {
  useUpdateTicketPriorityMutation,
  useUpdateTicketStatusMutation,
} from "../../api/ticketingQueries";

const priority = [
  { id: "rad1", value: "urgent", name: "urgent" },
  { id: "rad2", value: "medium", name: "medium" },
  { id: "rad3", value: "low", name: "low" },
];
const status = [
  { id: "rad11", value: "open", name: "open" },
  { id: "rad12", value: "resolved", name: "resolved" },
  { id: "rad13", value: "awaiting-customer", name: "awaiting customer" },
];
function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}

const Ticketingstatus = ({ data }) => {
  const [submitPriority, { isLoading }] = useUpdateTicketPriorityMutation();
  const [submitStatus, { isLoading: isUpdating }] =
    useUpdateTicketStatusMutation();
  const [formData, setFormData] = useState({ priority: "", status: "" });
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const updatePriority = (e) => {
    e.preventDefault();
    if (formData.priority) {
      submitPriority({
        priority: formData.priority,
        ticketId: data?.ticket?._id,
      })
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  const updateStatus = (e) => {
    e.preventDefault();
    if (formData.status) {
      submitStatus({
        status: formData.status,
        ticketId: data?.ticket?._id,
      })
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="p-4 capitalize grid grid-cols-1">
      <div className="my-4 flex flex-col">
        <div className="flex flex-col items-center justify-between gap-4 ">
          <form
            onSubmit={updatePriority}
            className="flex flex-col items-center justify-center w64 text-center"
          >
            <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
              priority
            </h1>
            <div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="priority"
                  id={"urgent"}
                  value="urgent"
                  radioGroup="priority"
                  defaultChecked={data?.ticket?.priority?.urgent}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={data?._id}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  Urgent
                </label>
              </div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="priority"
                  id={"medium"}
                  value="medium"
                  radioGroup="priority"
                  defaultChecked={data?.ticket?.priority?.medium}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={"medium"}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  Mediun
                </label>
              </div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="priority"
                  id={"urgent"}
                  value="low"
                  radioGroup="priority"
                  defaultChecked={data?.ticket?.priority?.low}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={"low"}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  Low
                </label>
              </div>
            </div>
            <Button
              className="!w-full !p-2 !rounded-2xl"
              htmlType="submit"
              type="primary"
              loading={isLoading}
            >
              Update
            </Button>
          </form>

          <form
            onSubmit={updateStatus}
            className="flex flex-col items-center justify-center w64 text-center"
          >
            <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
              status
            </h1>
            <div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="status"
                  radioGroup="status"
                  defaultChecked={data?.ticket?.status?.open}
                  id={"open"}
                  value={"open"}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={"open"}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  open
                </label>
              </div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="status"
                  radioGroup="status"
                  defaultChecked={data?.ticket?.status?.resolved}
                  id={"resolved"}
                  value={"resolved"}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={"resolved"}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  Resolved
                </label>
              </div>
              <div
                className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
              >
                <input
                  type="radio"
                  name="status"
                  radioGroup="status"
                  defaultChecked={data?.ticket?.status?.awaiting_customer}
                  id={"awaiting_customer"}
                  value={"awaiting_customer"}
                  className="radio text-sec peer"
                  onChange={handleInputChange}
                />
                <label
                  for={"awaiting_customer"}
                  className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                >
                  Awaiting Customer
                </label>
              </div>
            </div>
            <Button
              className="!w-full !p-2 !rounded-2xl"
              htmlType="submit"
              type="primary"
              loading={isUpdating}
            >
              Update
            </Button>
          </form>
        </div>
      </div>

      <div className="p-2 px-4 mx-4 bg-sec rounded-2xl">
        <h1 className="py-2">User : {data?.ticket?.name}</h1>
        <h2 className="py-2 lowercase">Email : {data?.ticket?.email}</h2>
        <h3 className="py-2">Tel : {data?.ticket?.phone_number}</h3>

        <div className="flex p-2 my-2 text-center rounded-full">
          <div className="w-full p-2 mx-2 text-center text-black capitalize bg-green-400 rounded-2xl">
            Details
          </div>
          <div className="w-full p-2 mx-2 text-center capitalize rounded-2xl bg-purple">
            note +
          </div>
        </div>
        <div className="p-2 m-4 border-l-2 border-white">
          {data?.replies &&
            data?.replies.map((data, i) => (
              <div className="flex items-center justify-center py-4" key={i}>
                <div className="p-2 mx-4 -mt-8 -ml-6 text-green-600 bg-green-200 rounded-full w-fit">
                  <FiMail />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(data?.reply),
                    }}
                  />
                  <h5 className="text-green-400 ">
                    {new Date(data?.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </h5>
                </div>
              </div>
            ))}
        </div>

        <div>
          <ReactQuill
            theme="snow"
            placeholder="write your content here"
            value={content}
            onChange={setContent}
            modules={Ticketingstatus.modules}
            formats={Ticketingstatus.formats}
            className="w-full outline-none bg-[#d9d9d9]"
          />
        </div>
        <button className={styles.btn}>Save</button>
      </div>
    </div>
  );
};

Ticketingstatus.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
Ticketingstatus.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];
export default Ticketingstatus;
