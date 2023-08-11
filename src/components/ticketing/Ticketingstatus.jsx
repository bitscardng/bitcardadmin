import React, { useState } from "react";
import { styles } from "../../styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiMail } from "react-icons/fi";

const priority = [
  { id: "rad1", value: "urgent", name: "urgent" },
  { id: "rad2", value: "medium", name: "medium" },
  { id: "rad3", value: "low", name: "low" },
];
const status = [
  { id: "rad1", value: "open", name: "open" },
  { id: "rad2", value: "resolved", name: "resolved" },
  { id: "rad3", value: "awaiting-customer", name: "awaiting customer" },
];

const msg = [
  {
    history:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores soluta, porro provident sapiente nisi molestiae!",
    date: "May 5 2023",
  },
  {
    history:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores soluta, porro provident sapiente nisi molestiae!",
    date: "May 5 2023",
  },
  {
    history:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores soluta, porro provident sapiente nisi molestiae!",
    date: "May 5 2023",
  },
];

const Ticketingstatus = () => {
  const [formData, setFormData] = useState("");
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="p-4 capitalize ">
      <div className="my-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-center w-64 text-center">
            <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
              priority
            </h1>
            <div>
              {priority.map((item, index) => {
                return (
                  <div
                    className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                    key={index}
                  >
                    <input
                      type="radio"
                      name="role"
                      required
                      id={item.id}
                      value={item.value}
                      className="radio text-sec peer"
                      onChange={handleInputChange}
                    />
                    <label
                      for={item.id}
                      className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-64 text-center">
            <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
              status
            </h1>
            <div>
              {status.map((item, index) => {
                return (
                  <div
                    className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                    key={index}
                  >
                    <input
                      type="radio"
                      name="role"
                      required
                      id={item.id}
                      value={item.value}
                      className="radio text-sec peer"
                      onChange={handleInputChange}
                    />
                    <label
                      for={item.id}
                      className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className={styles.btn}>Update</button>
      </div>

      <div className="p-2 px-4 mx-4 bg-sec rounded-2xl">
        <h1 className="py-2">User : {"xvals"}</h1>
        <h2 className="py-2 lowercase">Email : {"xvalx@gmil.com"}</h2>
        <h3 className="py-2">Tel : {"09090380499"}</h3>

        <div className="flex p-2 my-2 text-center rounded-full">
          <div className="w-full p-2 mx-2 text-center text-black capitalize bg-green-400 rounded-2xl">
            Details
          </div>
          <div className="w-full p-2 mx-2 text-center capitalize rounded-2xl bg-purple">
            note +
          </div>
        </div>

        <div className="p-2 m-4 border-l-2 border-white">
          {msg.map((data, index) => (
            <div className="flex items-center justify-center py-4">
              <div className="p-2 mx-4 -mt-8 -ml-6 text-green-600 bg-green-200 rounded-full w-fit">
                <FiMail />
              </div>
              <div>
                <p>{data.history}</p>
                <h5>{data.date}</h5>
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
