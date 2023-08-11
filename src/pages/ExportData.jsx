import React from "react";
import { styles } from "../styles";
import { HiDownload } from "react-icons/hi";


const datas = [
  { Country: "country NGN", pdf:"" },
  { Country: "country INT", pdf:"" },
  { Country: "country GHS", pdf:"" },
  { Country: "country KYN", pdf:"" },
];

const ExportData = () => {
  return (
    <div>
      <p className={`${styles.topic} mb-0`}>export data</p>
      <div className="flex items-center justify-between w-full gap-2 mt-8">
        {datas.map((data, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center text-center"
              key={index}
            >
              <div className="p-2 px-8 text-xl font-semibold capitalize rounded-full cursor-pointer bg-sec">
                {data?.Country}
              </div>
              <div className="flex flex-col gap-12 mt-8 w-fit">
                <a href={data.pdf} download="phone number.pdf">
                  <div className="relative flex flex-col bg-[#6c6aeb] rounded-2xl w-40 h-24 cursor-pointer group ">
                    <HiDownload
                      size={36}
                      className="absolute p-2 ml-4 -mt-4 rounded-full bg-[#5fc88f] group-hover:bg-active group-hover:text-primary duration-500 "
                    />
                    <p className="p-2 pt-8 font-light">
                      Download CSV Phone Number
                    </p>
                  </div>
                </a>
                <a href={data.pdf} download="email.pdf">
                  <div className="relative flex flex-col bg-[#6c6aeb] rounded-2xl w-40 h-24 cursor-pointer group">
                    <HiDownload
                      size={36}
                      className="absolute p-2 ml-4 -mt-4 text-xl rounded-full bg-[#5fc88f] group-hover:bg-active group-hover:text-primary duration-500"
                    />
                    <p className="p-2 pt-8 font-light">
                      Download Email Address
                    </p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExportData;
