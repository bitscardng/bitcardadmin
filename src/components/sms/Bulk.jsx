import React, { useState } from "react";
import { styles } from "../../styles";
import { FiUpload, FiUser } from "react-icons/fi";
const Bulk = () => {
  const [content, setContent] = useState("");
  const [contacts, setContacts] = useState([]);
  const parseVCF = (vcfContent) => {
    const vCards = vcfContent.split("END:VCARD");

    for (const vCard of vCards) {
      if (vCard.trim().length > 0) {
        const contact = {};
        const lines = vCard.split("\n");
        for (const line of lines) {
          const [field, value] = line.split(":");
          if (field && value) {
            contact[field] = value;
            console.log(field, "field", value);
          }
        }
        setContacts((prev) => [...prev, contact]);
      }
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileContent = await file.text();
      const parsedContacts = parseVCF(fileContent);
      console.log(parsedContacts, fileContent);
    }
  };
  return (
    <div>
      <div className="mt-3">
        <p>Upload Contacts</p>
        <div className="flex items-center max-w-md gap-4 p-2 px-4 mt-2 rounded-full bg-primary">
          <FiUpload className="text-3xl" color="#F04086" />
          <input
            type="file"
            accept=".vcf"
            className="w-full bg-transparent outline-none file-input-ghost"
            onChange={handleFileUpload}
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
        {/* <ReactQuill
          theme="snow"
          placeholder="write your content here"
          value={content}
          onChange={setContent}
          modules={Bulk.modules}
          formats={Bulk.formats}
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
    </div>
  );
};

// Bulk.modules = {
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

// Bulk.formats = [
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

export default Bulk;
