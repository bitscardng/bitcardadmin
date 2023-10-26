import React, { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiMail } from "react-icons/fi";
import Ticketingstatus from "./Ticketingstatus";
import { useParams } from "react-router-dom";
import {
  useGetTicketByIdQuery,
  useReplyTicketMutation,
} from "../../api/ticketingQueries";
import { Btn as Button } from "../antd/Btn";
import { toast } from "react-toastify";

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
  const { id } = useParams();
  const { data, isLoading } = useGetTicketByIdQuery({ id });
  const [reply, { isLoading: isReplying }] = useReplyTicketMutation();
  const handleReply = () => {
    console.log(content);
    if (content)
      reply({ id, reply: content })
        .unwrap()
        .then(() => {
          toast.success("reply sent successfully");
          setContent("");
        })
        .catch((err) => toast.error(err?.data?.message));
  };

  return (
    <div>
      <div>
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

        <div className="grid grid-cols-[60%_40%]">
          <div className="p-2 text-black">
            <div className="p-2 bg-white rounded-[10px]">
              <div className="p-2">
                <div className="p-3 bg-green-100 rounded-full w-fit">
                  <FiMail className="text-[green]" />
                </div>
                <div>
                  <h1 className="py-2">
                    User : {data?.data?.ticket?.name} #
                    {data?.data?.ticket?.username}
                  </h1>
                  {/* <h2 className="py-2">
                    {
                      "From its medieval origins to the digital era, learn everything there."
                    }
                  </h2> */}
                  <h5 className="py-2">
                    Date :
                    {new Date(
                      data?.data?.ticket?.createdAt
                    ).toLocaleDateString()}
                  </h5>
                  <p className="py-2">{data?.data?.ticket?.issues}</p>
                </div>
              </div>

              <div className="flex gap-[1rem] py-2 pb-4 text-center text-white">
                <Button className="!rounded-full text-white w-full !h-[2rem]">
                  Forward
                </Button>
                <Button className="!rounded-full text-white w-full !h-[2rem]">
                  Close
                </Button>
                <Button
                  loading={isReplying}
                  onClick={handleReply}
                  className="!rounded-full text-white w-full !h-[2rem]"
                >
                  Reply
                </Button>
              </div>
              <ReactQuill
                theme="snow"
                placeholder="write your content here"
                value={content}
                onChange={(value) => setContent(value)}
                modules={TicketingDetails.modules}
                formats={TicketingDetails.formats}
                className="w-full outline-none bg-[#d9d9d9]"
              />
            </div>
          </div>
          <div className="h-[80vh] my-auto overflow-y-scroll noscroll">
            <Ticketingstatus data={data?.data} />
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
