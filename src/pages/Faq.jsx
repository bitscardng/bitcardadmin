import React from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Faq = ({
  faq,
  handleInputChange,
  imagePreview,
  handleImageChange,
  content,
  setContent,
}) => {
  return (
    <form>
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
      <div className={styles.formField}>
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p className="flex">Image</p>
        </div>
        <input
          type="file"
          required
          // onChange={(e) => handleImageChange(e)}

          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
        {/* {imagePreview != null ? (
          <div className="w-full p-6 shadow-xl hero">
            <figure>
              <img src={imagePreview} alt="product" />
            </figure>
          </div>
        ) : (
          <p>No image set for this product.</p>
        )} */}
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
          name="name"
          value={faq?.name}
          onChange={handleInputChange}
          required
          placeholder="Category"
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <div className={`${styles.formField} rounded-2xl`}>
        <div className="flex flex-col gap-2 text-center text-white">
          <div className="flex items-center gap-2 pb-2 text-center h-fit">
            <FiUser className="text-[#f7931a] bg-[#3b3a62] rounded-full p-2 text-4xl" />
            <p>Content</p>
          </div>
          <div className="h-full">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={Faq.modules}
              formats={Faq.formats}
              className="text-white bg-transparent h-44 max-w-fit"
            />
          </div>
        </div>
      </div>
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
