import React, { useState } from "react";
import { styles } from "../../styles";


const priority = [
  { id: "rad1", value: "urgent", name: "urgent" },
  { id: "rad2", value: "medium", name: "medium" },
  { id: "rad3", value: "low", name: "low" },
];
const status = [
  { id: "rad1", value: "open", name: "open" },
  { id: "rad2", value: "resolved", name: "resolved" },
  { id: "rad3", value: "awaiting-customer", name: "awaiting customer" },
];

const Ticketingstatus = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="mx-4 capitalize">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
            priority
          </h1>
          <div>
            {priority.map((item, index) => {
              return (
                <div
                  className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                  key={index}
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

        <div>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="w-full p-2 mx-4 text-xl text-black bg-green-400 rounded-full">
              status
            </h1>
            <div>
              {status.map((item, index) => {
                return (
                  <div
                    className={`flex 
                   items-center gap-3 p-2 px-4 m-4 rounded-full w-full bg-primary`}
                    key={index}
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
        </div>
      </div>
      <button className={styles.btn}>Update</button>
    </div>
  );
};

export default Ticketingstatus;
