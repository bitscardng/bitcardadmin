import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { giftCard } from "../../constant";
import { FiArrowDownCircle } from "react-icons/fi";
import { Select } from "antd";
import {
  useGetGiftCardInfoQuery,
  useCreateGiftCardMutation,
  useLazyGetGiftCardQuery,
} from "../../api/giftCardService";
import { Btn as Button } from "../antd/Btn";

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
const DisplayData = ({ data }) => {
  return (
    <>
      {data?.map((e, index) => (
        <tr className="text-center hover:bg-sec" key={index}>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {e?.card_type}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {e?.country}
          </td>
          <td className="p-1 px-2 text-xl font-thin border">
            {e?.denomination}
          </td>
          <td className="p-1 px-2 text-xl font-bold duration-500 border">
            {e?.dollar_rate}
          </td>
          <td className="p-1 px-2 text-xl font-thin duration-500 border">
            {e?.ngn_rate}
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
      ))}
    </>
  );
};
const AddGiftcard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedCardType, setCardTypeSelected] = useState();
  const [selectedCountry, setCountrySelected] = useState();
  const { data, isLoading, isSuccess } = useGetGiftCardInfoQuery();
  const [fetchCard, {}] = useLazyGetGiftCardQuery();
  const [createCard, { isLoading: isCreatingCard }] =
    useCreateGiftCardMutation();
  const [datas, setDatas] = useState(giftCard);
  const [cards, setCards] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([]);

  const handleSubmit = (newFormState) => {
    setAmount(...amount, newFormState);
  };
  useEffect(() => {
    if (isSuccess)
      data.data.map((e) => {
        fetchCard({ name: e.card_name })
          .unwrap()
          .then((res) => {
            console.log(res);
            setCards((prev) => ({ ...prev, [e.card_name]: res.data }));
          });
      });
  }, [isSuccess]);

  // paginations start
  const [pageNumber, setPageNumber] = useState(0);
  //data view page is datasperpage so you can change the number 5 to what you want...
  const datasPerPage = 5;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(datas.length / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="capitalize">
      <p className={`${styles.topic} mb-0`}>add new gift card</p>
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
      <div className="flex flex-col gap-[1rem]">
        {data?.data.map((e) => (
          <div className="flex w-full overflow-x-auto border">
            <div>
              <h1 className="p-2 text-xl font-semibold text-center">
                {e?.card_name}
              </h1>
              <img src={e?.card_image} alt="" className="w-40 p-2 mt-20" />
            </div>
            <table className="w-full">
              {/* head */}
              <thead className="">
                <tr>
                  <th className="p-2 text-xl font-semibold border-x">
                    card type
                  </th>
                  <th className="p-2 text-xl font-semibold border-x">
                    country
                  </th>
                  <th className="p-2 text-xl font-semibold border-x">
                    denomination
                  </th>
                  <th className="p-2 text-xl font-semibold border-x">
                    Card rate
                  </th>
                  <th className="p-2 text-xl font-semibold border-x">
                    NGN rate
                  </th>
                  <th className="p-2 text-xl font-semibold border-x">Status</th>
                </tr>
              </thead>
              <tbody>
                <form
                  onSubmit={(e) => {}}
                  className="text-xl font-thin text-center border-y table-row"
                >
                  <td
                    className="p-2 border cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    {/* <div className="flex items-center justify-between p-2 text-center rounded-lg bg-purple">
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
                    </div> */}
                    <Select
                      options={cards[e?.card_name]}
                      className="!bg-purple"
                    />

                    {/* category lists */}
                    <div
                      className={`pt-2 duration-500 ${
                        open ? "h-fit" : "hidden"
                      }`}
                    >
                      <ul
                        className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                      >
                        {e?.card_types.map((cardTypeDatas, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                setCardTypeSelected(cardTypeDatas);
                                setOpen(false);
                              }}
                              className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                            >
                              {cardTypeDatas}
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
                      className={`pt-2 duration-500 ${
                        open ? "h-fit" : "hidden"
                      }`}
                    >
                      <ul
                        className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                      >
                        {e?.countries.map((countryDatas, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                setCountrySelected(countryDatas);
                                setOpen(false);
                              }}
                              className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                            >
                              {countryDatas}
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
                      className={`pt-2 duration-500 ${
                        open ? "h-fit" : "hidden"
                      }`}
                    >
                      <ul
                        className={`p-2 overflow-y-auto rounded-lg w-full bg-sec max-h-32 `}
                      >
                        {e?.denominations.map((datas, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                setSelected(datas);
                                setOpen(false);
                              }}
                              className="mt-2 border-b cursor-pointer hover:rounded-lg hover:bg-active"
                            >
                              {datas}
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
                    <Button
                      loading={isCreatingCard}
                      htmlType="submit"
                      className="rounded-lg !bg-[green] p-1 !w-full"
                    >
                      Submit
                    </Button>
                  </td>
                </form>
                <DisplayData data={cards[e?.card_name] || []} />
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGiftcard;
