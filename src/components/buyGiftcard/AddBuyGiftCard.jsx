import React, { useState } from "react";
import { styles } from "../../styles";
import { giftCard } from "../../constant";
import { FiArrowDownCircle } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { itunes } from "../../assets";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const cardType = [
  { cardTypeData: "E-code" },
  { cardTypeData: "Physical" },
  { cardTypeData: "Cash Receipt" },
  { cardTypeData: "Credit Receipt" },
  { cardTypeData: "Debit Receipt" },
  { cardTypeData: "No Receipt" },
];

const country = [
  { countryData: "USA" },
  { countryData: "UK" },
  { countryData: "Australia" },
  { countryData: "Canada" },
  { countryData: "New Zealand" },
  { countryData: "Germany" },
  { countryData: "Spain" },
  { countryData: "Switzerland" },
];

const denomination = [
  { data: "10 - 49" },
  { data: "50 - 99" },
  { data: "100" },
  { data: "101 - 199" },
  { data: "200 - 299" },
  { data: "300 - 499" },
  { data: "500" },
  { data: "501 - 5000" },
];

const AddBuyGiftCard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedCardType, setCardTypeSelected] = useState({});
  const [selectedCountry, setCountrySelected] = useState({});

  const [datas, setDatas] = useState(giftCard);
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([]);

  const handleSubmit = (newFormState) => {
    setAmount(...amount, newFormState);
  };

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 5;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(datas.length / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayDatas = datas
    .slice(pageVisited, pageVisited + datasPerPage)
    .map((data, index) => {
      return (
        <tr className="text-center hover:bg-sec" key={index}>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            Physical
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {data.country}
          </td>
          <td className="p-1 px-2 text-xl font-thin border">100</td>
          <td className="p-1 px-2 text-xl font-bold duration-500 border">
            4.3
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            460
          </td>
          <td className="flex justify-center gap-2 p-2 text-xl font-thin border">
            <btn className="p-1 duration-500 rounded-lg cursor-pointer bg-active hover:font-normal">
              Edit
            </btn>
            <btn className="bg-[red] p-1 rounded-lg cursor-pointer hover:font-normal duration-500">
              delete
            </btn>
          </td>
        </tr>
      );
    });
  //pagination end

  return (
    <div className="capitalize">
      <div>
        <Link
          to="../"
          relative="path"
          className="absolute p-2 ml-2 rounded-full cursor-pointer bg-sec text-active hover:bg-active hover:text-sec"
        >
          <TiArrowBackOutline />
        </Link>
        <p className={`${styles.topic} mb-0`}>add new gift card</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-2xl font-bold text-end">Add Rate</p>
        <div className="flex items-center justify-between gap-8">
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            RMD :
            <span className="pl-2 text-xl font-semibold text-center text-white">
              {"107"}
            </span>
          </p>
          <div
            className={`${styles.btn} max-w-fit px-10 `}
            // onClick={() => setModalOpen(true)}
          >
            Edit
          </div>
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            Profit :
            <span className="pl-2 text-xl font-semibold text-center text-white">
              {"30"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full overflow-x-auto border">
        <div>
          <h1 className="p-2 text-xl font-semibold text-center">itunes</h1>
          <img src={itunes} alt="" className="w-40 p-2 mt-20" />
        </div>
        <table className="w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th className="p-2 text-xl font-semibold border-x">card type</th>
              <th className="p-2 text-xl font-semibold border-x">country</th>
              <th className="p-2 text-xl font-semibold border-x">
                denomination
              </th>
              <th className="p-2 text-xl font-semibold border-x">Card rate</th>
              <th className="p-2 text-xl font-semibold border-x">NGN rate</th>
              <th className="p-2 text-xl font-semibold border-x">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xl font-thin text-center border-y">
              <td
                className="p-2 border cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="flex items-center justify-between p-2 text-center rounded-lg bg-purple">
                  <p
                    className={` font-normal capitalize ${
                      !selectedCardType && " font-thin"
                    }`}
                  >
                    {selectedCardType
                      ? selectedCardType?.cardTypeData
                      : "Select Category"}
                  </p>
                  <FiArrowDownCircle
                    className={` duration-1000 text-[20px] ${
                      open && "rotate-180 "
                    }`}
                  />
                </div>

                {/* category lists */}
                <div
                  className={`pt-2 duration-500 ${open ? "h-fit" : "hidden"}`}
                >
                  <ul
                    className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                  >
                    {cardType.map((cardTypeDatas, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setCardTypeSelected(cardTypeDatas);
                            setOpen(false);
                          }}
                          className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                        >
                          {cardTypeDatas.cardTypeData}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </td>

              <td
                className="p-2 border cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="flex items-center justify-between p-2 text-center rounded-lg bg-purple">
                  <p
                    className={` font-normal capitalize ${
                      !selectedCountry && " font-thin"
                    }`}
                  >
                    {selectedCountry
                      ? selectedCountry?.countryData
                      : "Select Category"}
                  </p>
                  <FiArrowDownCircle
                    className={` duration-1000 text-[20px] ${
                      open && "rotate-180 "
                    }`}
                  />
                </div>

                {/* category lists */}
                <div
                  className={`pt-2 duration-500 ${open ? "h-fit" : "hidden"}`}
                >
                  <ul
                    className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                  >
                    {country.map((countryDatas, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setCountrySelected(countryDatas);
                            setOpen(false);
                          }}
                          className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                        >
                          {countryDatas.countryData}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </td>

              <td
                className="p-2 border cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="flex items-center justify-between p-2 text-center rounded-lg bg-purple">
                  <p
                    className={` font-normal capitalize ${
                      !selected && " font-thin"
                    }`}
                  >
                    {selected ? selected?.data : "Select Category"}
                  </p>
                  <FiArrowDownCircle
                    className={` duration-1000 text-[20px] ${
                      open && "rotate-180 "
                    }`}
                  />
                </div>

                {/* category lists */}
                <div
                  className={`pt-2 duration-500 ${open ? "h-fit" : "hidden"}`}
                >
                  <ul
                    className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                  >
                    {denomination.map((datas, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setSelected(datas);
                            setOpen(false);
                          }}
                          className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                        >
                          {datas.data}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </td>

              <td className="p-2 border ">
                <input
                  className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                  type="number"
                />
              </td>
              <td className="p-2 border">460</td>
              <td className="p-2 border">
                <button
                  type="submit"
                  className="rounded-lg bg-[green] p-1 w-full"
                >
                  Submit
                </button>
              </td>
            </tr>
            {displayDatas}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddBuyGiftCard;
