import { useState } from "react";
import { styles } from "../styles";
import { MdCloudUpload } from "react-icons/md";
import {
  FiUser,
  FiArrowDownCircle,
  FiEdit2,
  FiPlusCircle,
} from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useUploadFileMutation } from "../api/apiSlice";
import {
  useGetNewsCategoryQuery,
  useUpdateNewsCategoryMutation,
  useCreateNewsCategoryMutation,
  useCreateNewsMutation,
} from "../api/newsApiSlice";
import { toast } from "react-toastify";

const modules = {
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
const formats = [
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
const News = () => {
  const [upload, { isLoading: isUploading }] = useUploadFileMutation();
  const { data: category, isLoading: isLoadingCategory } =
    useGetNewsCategoryQuery();
  const [updateNewsCategory, { isLoading: isUpdatingCategory }] =
    useUpdateNewsCategoryMutation();
  const [createNewsCategory, { isLoading: isCreatingNewsCategory }] =
    useCreateNewsCategoryMutation();
  const [createNews, { isLoading: isCreatingNews }] = useCreateNewsMutation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [editCategory, setEditCategory] = useState(false);
  const [editCategoryData, setEditCategoryData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [categoryInput, setCategoryInput] = useState("");
  const [newsData, setNewsData] = useState({ title: "", author: "" });
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    upload(formData)
      .unwrap()
      .then((res) => {
        setImagePreview(res?.url);
      })
      .catch(() => {
        toast.error("error uploading image");
      });
  };

  const handleCreateCategory = (e) => {
    createNewsCategory({ name: e })
      .unwrap()
      .then((res) => {
        setCategoryInput("");
      })
      .catch(() => {});
  };

  const handleEditCategory = (e) => {
    const { _id } = e;
    updateNewsCategory({ id: _id, body: { name: categoryInput } })
      .unwrap()
      .then(() => {
        setEditCategory((prev) => !prev);
        setCategoryInput("");
      })
      .catch(() => {});
  };
  const handleSubmit = () => {
    createNews({
      image: imagePreview,
      category: selected._id,
      content: `<div style="color: rgb(255,255,255);">${content}</div>`,
      ...newsData,
    })
      .unwrap()
      .then((res) => {
        setNewsData({ title: "", author: "" });
        setContent("");
        setImagePreview(null);
        toast.success("news created successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleCategoryInputChange = (e) => {
    setCategoryInput(e.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="flex flex-col items-center w-full mx-auto">
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
            <div className="">
              {isUploading ? (
                <div>
                  Uploading
                  <span className="loading loading-dots loading-md"></span>
                </div>
              ) : (
                <p>Upload image ( jpeg, svg, png)</p>
              )}
            </div>
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
        <p className={`text-white capitalize ${!selected && "text-[#9CA3AF]"}`}>
          {selected ? selected?.name : "Select Category"}
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
          {category?.map((data, index) => {
            return (
              <li key={index}>
                <div className="flex items-center justify-between">
                  <p
                    className={`w-full  capitalize p-2 m-1 hover:bg-active text-[#9CA3AF] hover:text-white duration-500 cursor-pointer rounded-xl group:text-white`}
                    onClick={() => {
                      setSelected(data);
                      setOpen(false);
                    }}
                  >
                    {data?.name}
                  </p>
                  <FiEdit2
                    className="text-xl duration-500 rounded-2xl hover:text-3xl hover:text-[red] hover:p-1 hover:bg-white cursor-pointer group"
                    onClick={() => {
                      setEditCategory((prev) => !prev);
                      setEditCategoryData(() => {
                        setCategoryInput(data.name);
                        return data;
                      });
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        {/* create new data */}
        <div className="flex flex-row items-center w-full gap-1 pt-4">
          <input
            required
            type="text"
            name="cateName"
            value={categoryInput}
            onChange={handleCategoryInputChange}
            placeholder="Type New Category Here..."
            className="w-full p-2 py-3 text-white outline-none bg-sec rounded-2xl"
          />
          <button>
            {editCategory ? (
              <div>
                {isUpdatingCategory ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <FiEdit2
                    className="text-xl duration-500 rounded-2xl hover:text-3xl hover:text-[red] hover:p-1 hover:bg-white cursor-pointer group"
                    onClick={() => handleEditCategory(editCategoryData)}
                  />
                )}
              </div>
            ) : (
              <div>
                {isCreatingNewsCategory ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <FiPlusCircle
                    onClick={() => {
                      handleCreateCategory(categoryInput);
                    }}
                    className="text-[#6C6AEB] text-4xl hover:text-active cursor-pointer duration-500"
                  />
                )}
              </div>
            )}
          </button>
        </div>
      </div>

      <div className={styles.formField}>
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p className="flex">Title</p>
        </div>
        <input
          type="text"
          name="title"
          value={newsData.title}
          onChange={handleInputChange}
          required
          placeholder="News"
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <div className={styles.formField}>
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="p-2 text-center rounded-full bg-[#3b3a62]">
            <FiUser className="text-[#f7931a]" />
          </div>
          <p className="flex">Author</p>
        </div>
        <input
          type="text"
          name="author"
          value={newsData.author}
          onChange={handleInputChange}
          required
          placeholder="John Doe"
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <div className={`p-2 px-4 m-4 bg-sec w-[80%] mx-auto rounded-2xl`}>
        <div className="flex flex-col h-full gap-2">
          <div className="flex items-center gap-2 pb-2 h-fit">
            <FiUser className="text-[#f7931a] bg-[#3b3a62] rounded-full p-2 text-4xl" />
            <p>Content</p>
          </div>
          <ReactQuill
            theme="snow"
            placeholder="write your content here"
            value={content}
            onChange={(value) => {
              console.log(value);
              setContent(value);
            }}
            modules={modules}
            formats={formats}
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div onClick={handleSubmit} className={styles.btn}>
        post
      </div>
    </form>
  );
};

export default News;
