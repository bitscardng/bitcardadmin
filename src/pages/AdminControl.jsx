import React, { useState } from "react";
import { styles } from "../styles";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpen } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { toast } from "react-toastify";
import { useCreateAdminMutation } from "../api/authQueries";

const denomination = [
  { id: "rad01", name: "Admin", value: "admin" },
  { id: "rad02", name: "Customer Rep", value: "customer-rep" },
];

const AdminControl = () => {
  const [createAdmin, { isLoading }] = useCreateAdminMutation();
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createAdmin(formData)
      .unwrap()
      .then(() => {
        toast.success("user created successfully");
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message || err.data.message || "error creating user");
      });
  };
  return (
    <div className="w-[80%] mx-auto">
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <FiUser className="text-[#f7931a]" />
            </div>
            <p className="flex">Username</p>
          </div>
          <input
            name="username"
            required
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <HiOutlineMail className="text-[#5ec88f]" />
            </div>
            <p className="flex">Email</p>
          </div>
          <input
            name="email"
            type="email"
            required
            onChange={handleInputChange}
            placeholder="example@.abc"
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <BsTelephone className="text-[#f7931a]" />
            </div>
            <p className="flex">Phone</p>
          </div>
          <input
            name="phone"
            type="text"
            required
            placeholder="+00 000 000"
            onChange={handleInputChange}
            className="w-full p-2 mx-1 bg-transparent outline-none"
          />
        </div>
        <div className={styles.formField}>
          <div className="flex flex-row items-center gap-2 text-center">
            <div className="p-2 text-center rounded-full bg-[#3b3a62]">
              <BiLockOpen className="text-[#767DFF]" />
            </div>
            <p className="">Password</p>
          </div>
          <input
            type="password"
            name="password"
            required
            placeholder="********"
            className="w-full p-2 mx-1 bg-transparent outline-none"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-center mt-6 text-center">
          <p className="text-2xl font-semibold">Select an option below</p>
          <div className="flex">
            {denomination.map((item, i) => {
              return (
                <div
                  className={`flex items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                  key={i}
                >
                  <input
                    type="radio"
                    name="role"
                    required
                    id={item.id}
                    value={item.value}
                    className="radio text-sec peer"
                    onChange={handleInputChange}
                  />
                  <label
                    for={item.id}
                    className="w-full p-3 px-4 duration-500 rounded-full cursor-pointer hover:bg-active bg-sec peer-checked:bg-active"
                  >
                    {item.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <button type="submit" className={`${styles.btn}`}>
          Create user
        </button>
      </form>
    </div>
  );
};

export default AdminControl;
