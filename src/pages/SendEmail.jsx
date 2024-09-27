import React, { useCallback, useEffect, useState } from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SendEmailBcTemplate } from "../template/email-bsc";
import { useGetAllusersMutation, useSend_bulk_emailMutation, useUsersQuery } from "../api/sendEmailSlice";

// const templateData = [
//   { id: "rad01", name: "A Customer" },
//   { id: "rad02", name: "All Customer" },
// ];

const SendEmail = () => {
    const [emails, setEmails] = useState([]);
    const [limit, setLimit] = useState(0);
    const [subject, setSubject] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');
    const [sendBulkEmail, { isLoading: isSendBulkEmail }] = useSend_bulk_emailMutation();
    const {data, isLoading, refetch } = useUsersQuery();
    const [getAllUsers, { isLoading: isGetAllUsers }] = useGetAllusersMutation()

    useEffect(() => {
        if (data) {
            setLimit(data?.pagination?.totalItems)
        }
    }, [data])

    const fetchData = () => {
        if (limit > 0) {
            toast.info('Getting Users Email')
            getAllUsers(limit).then((result) => {
                const usersEmail = result?.data?.data?.map(user => user.email);
                setEmails(usersEmail);
                toast.info('All Users Email Ready')
            })
            .catch((err) => {
                toast.error(
                    err.message ||
                    err?.data?.message ||
                    err?.data?.msg ||
                    "an error occurred"
                )
            })
        } else {
            toast.error('Error Getting Users Email')
        }
    }

    if (emails) {
        console.log(emails);
    }

        // Handle checkbox change
        const handleCheckboxChange = (e) => {
            const checked = e.target.checked;
            setIsChecked(checked);
            if (checked) {
                fetchData();
            }
        };

  const handleSendEmailBc = () => {
    sendBulkEmail({
        emails: emails,
        title: subject,
        template: SendEmailBcTemplate(content)
    })
        .unwrap()
        .then(() => {
            toast.success('Mail Successfully Sent');
        })
        .catch((err) => {
            toast.error(
                err.message ||
                err?.data?.message ||
                err?.data?.msg ||
                "an error occurred"
            )
        })
  }
  return (
    <div className="flex flex-col">
      <p className={`${styles.topic} mb-0`}>send email</p>
      <form className="flex flex-col items-center ">
        <div className="flex items-center justify-between w-full">
          <div className={`${styles.formField}`}>
            <div className="flex flex-row items-center gap-2 text-center">
              <div className="p-2 text-center rounded-full bg-[#3b3a62]">
                <FiUser className="text-[#f7931a]" />
              </div>
              <p className="flex">Email</p>
            </div>
            <input
              type="text"
              name="email"
              value={emails}
              onChange={(e) => setEmails([e.target.value])}
              required
              placeholder="John Doe"
              className="w-full p-2 mx-1 bg-transparent outline-none"
            />
          </div>
          <p className="m-2 text-2xl font-semibold">OR</p>
          <div className="flex flex-row items-center justify-between">
          <input
                type="checkbox"
                name="check-all"
                className="mr-1 checkbox peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <p className="w-[20rem] mx-2 p-4 text-center rounded-full bg-sec peer-checked:bg-active duration-500">
              Check, to send to all customer
            </p>
          </div>
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
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="John Doe"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={`p-2 px-4 m-4 bg-sec w-full rounded-2xl`}>
          <div className="relative flex flex-col h-full gap-2">
            <div className="flex items-center gap-2 pb-2">
              <FiUser className="text-[#f7931a] bg-[#3b3a62] rounded-full p-2 text-4xl" />
              <p>Content</p>
            </div>
            <textarea
              required
              placeholder="Type here"
              name="content"
              rows={10}
              className="p-4 outline-none bg-primary rounded-2xl"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex gap-20">
          {/* <Link to="/email1preview" className={styles.btn}>
            Preview
          </Link> */}
          <btn className={styles.btn} onClick={handleSendEmailBc}>Send</btn>
        </div>
      </form>

      {/* Template*/}
      {/* <div className="flex flex-row items-start justify-between w-full h-full">
        {templateData.map((item, i) => {
          return (
            <div
              className={`flex gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
            >
              <input
                type="radio"
                name="users"
                id={item.id}
                value={item.name}
                className="mt-2 radio text-sec peer"
                onChange={(e) => setTemplate(e.target.value)}
              />
              <label
                for={item.id}
                className="w-full p-2 duration-500 rounded-2xl cursor-pointer hover:bg-active bg-sec peer-checked:bg-active h-[40vh]"
              >
                <p className="pl-2 text-2xl font-semibold">{item.name}</p>
                <div className="p-2 overflow-y-scroll bg-primary h-[32vh] rounded-2xl mt-2 font-light">
                  <div>{content}</div>
                </div>
              </label>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default SendEmail;
