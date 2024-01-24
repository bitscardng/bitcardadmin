import React, { useState } from "react";
import { styles } from "../../styles";
import { FiUser, FiPhone } from "react-icons/fi";
import { useSingle_smsMutation } from "../../api/smsApiSlice";
import { message } from "antd";

const Single = () => {
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [sendsms, {}] = useSingle_smsMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact) {
      sendsms({ message: content, phone: contact })
        .unwrap()
        .then((res) => message.success("sms delivered"));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <p>send sms</p>
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
            value={"BITSCARD"}
            disabled
          />
        </div>
      </div>
      <div className="mt-3">
        <p>phone</p>
        <div className="flex items-center max-w-md gap-4 p-2 px-4 mt-2 rounded-full bg-primary">
          <div className="rounded-full glass">
            <FiPhone className="text-3xl p-1 text-[#f7931a]" />
          </div>
          <input
            type="number"
            placeholder="2340000000000"
            required
            className="w-full bg-transparent outline-none"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4">
        {/* <ReactQuill
          theme="snow"
          placeholder="write your content here"
          value={content}
          onChange={setContent}
          modules={Single.modules}
          formats={Single.formats}
          className="w-full p-2 mx-1 bg-transparent outline-none"
        /> */}
        <p>message</p>
        <textarea
          value={content}
          className="w-full bg-white text-black p-[0.5rem]"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Send
      </button>
    </form>
  );
};

// Single.modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ align: [] }],
//     [{ color: [] }, { background: [] }],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["clean"],
//   ],
// };

// Single.formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "color",
//   "background",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "video",
//   "image",
//   "code-block",
//   "align",
// ];

export default Single;
