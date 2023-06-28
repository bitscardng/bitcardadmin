import React, { useState } from "react";
import { styles } from "../styles";
import { MdCloudUpload } from "react-icons/md";
import {
  FiUser,
  FiArrowDownCircle,
  FiTrash2,
  FiPlusCircle,
} from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const News = ({ news, handleInputChange, content, setContent }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [newsImage, setNewsImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    setNewsImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const [datas, setDatas] = useState([
    { name: "btc" },
    { name: "btc2" },
    { name: "btc3" },
    { name: "btc4" },
  ]);
  // const [addFormData, setAddFormData] = useState({
  //   cateName: "",
  // });

  // const handleAddFormChange = (e) => {
  //   e.preventDefault();

  //   const fieldName = e.target.getAttribute("name");
  //   const fieldValue = e.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;
  //   setAddFormData(newFormData);
  // };

  const handleDeleleData = (e) => {
    setDatas(datas.filter((_, index) => index !== e));
  };

  return (
    <form className="flex flex-col items-center">
      <p className={`${styles.topic} mb-0`}>news</p>
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
          value={news?.name}
          onChange={handleInputChange}
          required
          placeholder="John Doe"
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <div
        onClick={() => document.querySelector(".image-field").click()}
        className="flex flex-col items-center justify-center w-64 h-64 border-2 border-white border-dashed rounded-full cursor-pointer hero hover:text-active hover:border-active"
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
      <div
        className={`${styles.formField} cursor-pointer flex-row justify-between py-3`}
        onClick={() => setOpen(!open)}
        onChange={handleInputChange}
      >
        <div className="p-2 text-center rounded-full bg-[#3b3a62]">
          <FiUser className="text-[#f7931a]" />
        </div>
        <p className={`text-white ${!selected && "text-[#9CA3AF]"}`}>
          {selected ? selected : "Select Category"}
        </p>
        <div className="p-2 text-center rounded-full bg-[#3b3a62]">
          <FiArrowDownCircle
            className={` text-[#f7931a] duration-1000 text-[20px] ${
              open && "rotate-180 text-white"
            }`}
          />
        </div>
      </div>
      {/* category lists */}
      <div className={` duration-500 ${open ? "h-60" : "hidden"}`}>
        <ul
          className={`p-2 overflow-y-auto rounded-xl w-72 bg-sec h-40
          `}
        >
          {datas.map((data, index) => {
            return (
              <li key={index}>
                <div className="flex items-center justify-between">
                  <p
                    className={`w-full p-2 m-1 hover:bg-active text-[#9CA3AF] hover:text-white duration-500 cursor-pointer rounded-xl group:text-white`}
                    onClick={() => {
                      if (data?.name) {
                        setSelected(data?.name);
                        setOpen(false);
                      }
                    }}
                  >
                    {data?.name}
                  </p>
                  <FiTrash2
                    className="text-xl duration-500 rounded-2xl hover:text-3xl hover:text-[red] hover:p-1 hover:bg-white cursor-pointer group"
                    onClick={() => handleDeleleData(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        {/* create new data */}
        <form className="flex flex-row items-center w-full gap-1 pt-4">
          <input
            required
            type="text"
            name="cateName"
            // value={cateInput}
            // onChange={onInputChange}
            placeholder="Type New Category Here..."
            className="w-full p-2 py-3 text-white outline-none bg-sec rounded-2xl"
          />
          <button type="submit">
            <FiPlusCircle className="text-[#6C6AEB] text-4xl hover:text-active cursor-pointer duration-500" />
          </button>
        </form>
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
            modules={News.modules}
            formats={News.formats}
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className={styles.btn}>post</div>
    </form>
  );
};

News.modules = {
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
News.formats = [
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

export default News;
