import React, { useState } from "react";
import { styles } from "../styles";
import { MdCloudUpload } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Faq = ({ faq, handleInputChange, content, setContent }) => {
  const [faqImage, setFaqImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    setFaqImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <form className="flex flex-col items-center">
      <p className={`${styles.topic} mb-0`}>faq</p>
      <div className={styles.formField}>
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p className="flex">Title</p>
        </div>
        <input
          type="text"
          name="name"
          value={faq?.name}
          onChange={handleInputChange}
          required
          placeholder="John Doe"
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <div
        onClick={() => document.querySelector(".image-field").click()}
        className="flex flex-col items-center justify-center w-64 h-64 border-2 border-white border-dashed rounded-full hero hover:text-active hover:border-active"
      >
        <input
          id="image"
          type="file"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleImageChange(e)}
          required
          className="hidden image-field"
        />
        {imagePreview != null ? (
          <img
            src={imagePreview}
            className="object-cover w-full h-full p-1 rounded-full"
          />
        ) : (
          <div className="flex flex-col items-center w-40 text-center">
            <MdCloudUpload className="w-20 h-20" />
            <p className="">Upload giftcard image ( jpeg, svg, png)</p>
          </div>
        )}
      </div>
      <div className={styles.formField}>
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p className="flex">Category</p>
        </div>
        <input
          type="text"
          name="category"
          value={faq?.category}
          onChange={handleInputChange}
          required
          placeholder="Category"
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
            modules={Faq.modules}
            formats={Faq.formats}
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className={styles.btn}>post</div>
    </form>
  );
};

Faq.modules = {
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
Faq.formats = [
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

export default Faq;
