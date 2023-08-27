import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { styles } from "../../styles";
import { FiUpload, FiUser } from "react-icons/fi";
import { useSingle_smsMutation } from "../../api/smsApiSlice";

const Single = () => {
  const [content, setContent] = useState("");
  const [sendsms, {}] = useSingle_smsMutation();
  useEffect(() => {
    sendsms({ message: "test", phone: "2347013879246" })
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("testing");
  }, []);
  return (
    <div>
      <div className="mt-3">
        <p>Upload Contacts</p>
        <div className="flex items-center max-w-md gap-4 p-2 px-4 mt-2 rounded-full bg-primary">
          <FiUpload className="text-3xl" color="#F04086" />
          <input
            type="file"
            className="w-full bg-transparent outline-none file-input-ghost"
          />
        </div>
      </div>
      <div className="mt-3">
        <p>Sender</p>
        <div className="flex items-center max-w-md gap-4 p-2 px-4 mt-2 rounded-full bg-primary">
          <div className="rounded-full glass">
            <FiUser className="text-3xl p-1 text-[#f7931a]" />
          </div>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="mt-4">
        <ReactQuill
          theme="snow"
          placeholder="write your content here"
          value={content}
          onChange={setContent}
          modules={Single.modules}
          formats={Single.formats}
          className="w-full p-2 mx-1 bg-transparent outline-none"
        />
      </div>
      <button type="submit" className={styles.btn}>
        Send
      </button>
    </div>
  );
};

Single.modules = {
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

Single.formats = [
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

export default Single;
