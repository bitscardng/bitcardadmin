import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";

const datas = [
  {
    name: "Twitter dowload",
    url: "bity.com/GTHFD",
    date: "21/06/2023",
    engage: 2042,
  },
  {
    name: "Instagram dowload",
    url: "bity.com/GTHFD",
    date: "21/06/2023",
    engage: 2042,
  },
  {
    name: "Facebook App dowload",
    url: "bity.com/GTHFD",
    date: "21/06/2023",
    engage: 2042,
  },
];

const AdsCampaign = () => {
  return (
    <div className="">
      <p className={`${styles.topic} mb-0`}>ads campaign</p>
      <Link
        to="/create-ads"
        className={`${styles.btn} flex items-center gap-2 flex-row justify-center`}
      >
        Create Ads
        <FaPlus className="text-sec" />
      </Link>

      <div className="p-2 pt-8">
        <div className="w-full overflow-x-auto">
          <table className="w-full ">
            <thead className="">
              <tr className="rounded-full">
                <th className="p-2 text-xl font-semibold border"></th>
                <th className="p-2 text-xl font-semibold border">
                  Campaign Name
                </th>
                <th className="p-2 text-xl font-semibold border">
                  URL Link Shortner
                </th>
                <th className="p-2 text-xl font-semibold border">Date</th>
                <th className="p-2 text-xl font-semibold border">Engagement</th>
                <th className="p-2 text-xl font-semibold border">Approval</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr className="text-center hover:bg-sec" key={index}>
                  <th className="p-1 px-2 text-xl duration-500 border">
                    {index + 1}
                  </th>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data.name}
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border hover:link">
                    <Link to={data.url} target="_blank">
                      {data.url}
                    </Link>
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border">
                    {data.date}
                  </td>
                  <td className="p-1 px-2 text-xl font-thin duration-500 border ">
                    <div className="flex items-center justify-evenly">
                      {data.engage}
                      <MdBarChart />
                    </div>
                  </td>

                  <td className="flex flex-col gap-2 p-2 text-xl font-thin border">
                    <button
                      type="submit"
                      className="bg-[green] p-1 rounded-lg cursor-pointer hover:font-normal duration-500"
                    >
                      Purchase
                    </button>
                    <button
                      type="cancel"
                      className="bg-[red] p-1 rounded-lg cursor-pointer hover:font-normal duration-500"
                    >
                      Decline
                    </button>
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

export default AdsCampaign;
