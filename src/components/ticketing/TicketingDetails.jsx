import React, { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiMail } from "react-icons/fi";
import Ticketingstatus from "./Ticketingstatus";

const navLinks = [
  {
    title: "reply",
  },
  {
    title: "forward",
  },
  {
    title: "resolved",
  },
  {
    title: "note*",
  },
];

const msgLinks = [
  {
    title: "forward",
  },
  {
    title: "Close",
  },
  {
    title: "reply",
  },
];

const TicketingDetails = () => {
  const [active, setActive] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <div className="relative mb-4">
        <Link
          to="/ticketing/all activies"
          className="absolute p-2 ml-2 rounded-full cursor-pointer bg-sec text-active hover:bg-active hover:text-sec"
        >
          <TiArrowBackOutline />
        </Link>
        <p className={`${styles.topic} mb-0 `}>ticket details</p>
      </div>

      <div className="">
        <div className="flex text-center bg-[#282C4A] p-2 rounded-full  my-2">
          {navLinks.map((nav, index) => (
            <div
              className="flex items-center w-full mx-2 capitalize "
              key={index}
            >
              <Link
                className={`${
                  active === nav.title ? "bg-active" : "bg-purple"
                } w-full p-2 rounded-full hover:bg-active duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="justify-center gap-3  lg:flex">
          <div className="p-2 text-black bg-white round-full rounded-2xl">
            <div className="p-2">
              <div className="p-2">
                <div className="p-3 bg-green-100 rounded-full w-fit">
                  <FiMail className="text-[green]" />
                </div>
                <div>
                  <h1 className="py-2">User : {"John Doe"}</h1>
                  <h2 className="py-2">
                    {
                      "From its medieval origins to the digital era, learn everything there."
                    }
                  </h2>
                  <h5 className="py-2">Date : {"June 5 2023, 21:11"}</h5>
                  <p className="py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero maiores iste assumenda magnam, ipsa cum id deserunt
                    quos quia mollitia velit cupiditate beatae vel itaque, ut
                    distinctio facilis sunt excepturi veniam animi eaque
                    incidunt nostrum vitae! Dolorem, qui nemo illum eligendi
                    illo sed minima, nesciunt earum unde odio, quis nostrum
                  </p>
                </div>
              </div>

              <div className="flex py-2 pb-4 text-center text-white">
                {msgLinks.map((msg, index) => (
                  <div
                    className="flex items-center w-full mx-2 capitalize "
                    key={index}
                  >
                    <Link
                      className={`bg-purple w-full p-2 rounded-full hover:bg-active duration-300`}
                    >
                      {msg.title}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="p-4">
                <ReactQuill
                  theme="snow"
                  placeholder="write your content here"
                  value={content}
                  onChange={setContent}
                  modules={TicketingDetails.modules}
                  formats={TicketingDetails.formats}
                  className="w-full outline-none bg-[#d9d9d9]"
                />
              </div>
            </div>
          </div>

          <div>
            <Ticketingstatus/>
          </div>
        </div>
      </div>
    </div>
  );
};

TicketingDetails.modules = {
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
TicketingDetails.formats = [
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

export default TicketingDetails;
