import React from "react";
import { MdBarChart } from "react-icons/md";

const datas = [
  {
    number: 2349101234567,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste. Eos porro eius voluptas sed nam enim quo dolor nobis.",
    date: "21/06/2023",
    sender: "Bitcard",
  },
  {
    number: 2348101234567,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste. Eos porro eius voluptas sed nam enim quo dolor nobis.",
    date: "21/06/2023",
    sender: "Bitcard",
  },
  {
    number: 2347101234567,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iste. Eos porro eius voluptas sed nam enim quo dolor nobis.",
    date: "21/06/2023",
    sender: "Bitcard",
  },
];

const Delivery = () => {
  return (
    <div className="hero">
      <div className="p-2 pt-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full ">
            <thead className="">
              <tr className="rounded-full">
                <th className="p-2 text-xl font-semibold border"></th>
                <th className="p-2 text-xl font-semibold border">
                  Phone Number
                </th>
                <th className="p-2 text-xl font-semibold border">Message</th>
                <th className="p-2 text-xl font-semibold border">Date</th>
                <th className="p-2 text-xl font-semibold border">Sender</th>
                <th className="p-2 text-xl font-semibold border">Status</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr className="text-center hover:bg-sec" key={index}>
                  <th className="p-1 px-2 text-xl duration-500 border">
                    {index + 1}
                  </th>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    +{data.number}
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    <div>{data.msg}</div>
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data.date}
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border ">
                    <div className="flex items-center capitalize justify-evenly">
                      {data.sender}
                      <MdBarChart />
                    </div>
                  </td>

                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    <div
                      type="cancel"
                      className="bg-[green] p-1 rounded-lg cursor-pointer hover:font-normal duration-500 text-white"
                    >
                      Delivered
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
