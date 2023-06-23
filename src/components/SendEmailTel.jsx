import React, { useState } from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import { TiArrowBackOutline } from "react-icons/ti";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const SendEmailTel = ({ sendEmail, handleInputChange }) => {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col">
      <Link to="/telesales" className="absolute mt-2 ml-4 ">
        <TiArrowBackOutline className="relative flex text-xl cursor-pointer text-active hover:text-2xl" />
      </Link>
      <p className={`${styles.topic} mb-0 `}>send email</p>
      <form className="flex flex-col items-center ">
        <div className={`${styles.formField}`}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Email</p>
          </div>
          <input
            type="text"
            name="name"
            value={sendEmail?.name}
            onChange={handleInputChange}
            required
            placeholder="John Doe"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>

        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center ">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="">Subject</p>
          </div>
          <input
            type="text"
            name="name"
            value={sendEmail?.name}
            onChange={handleInputChange}
            required
            placeholder="John Doe"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={`p-2 px-4 m-4 bg-sec w-full rounded-2xl`}>
          <div className="flex flex-col h-full gap-2">
            <div className="flex items-center gap-2 pb-2 h-fit">
              <FiUser className="text-[#f7931a] bg-[#3b3a62] rounded-full p-2 text-4xl" />
              <p>Content</p>
            </div>
            <ReactQuill
              theme="snow"
              placeholder="write your content here"
              value={content}
              onChange={setContent}
              modules={SendEmailTel.modules}
              formats={SendEmailTel.formats}
              className="w-full p-2 mx-1 bg-transparent outline-none"
            />
          </div>
        </div>
        <div className={styles.btn}>post</div>
      </form>
    </div>
  );
};

export default SendEmailTel;

SendEmailTel.modules = {
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
SendEmailTel.formats = [
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
