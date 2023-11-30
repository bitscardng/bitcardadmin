import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { giftCard } from "../../constant";
import { FiArrowDownCircle } from "react-icons/fi";
import { Select } from "antd";
import {
  useGetGiftCardInfoQuery,
  useCreateGiftCardMutation,
  useLazyGetGiftCardQuery,
  useUpdateGiftCardMutation,
  useDeleteGiftCardMutation,
} from "../../api/giftCardService";
import { Btn as Button } from "../antd/Btn";
import { toast } from "react-toastify";
import Loader from "../Loader";

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
const DisplayData = ({ data, setCardId, deleteCard, index, setFormState }) => {
  return (
    <>
      {data?.map((e, i) => (
        <tr className="text-center hover:bg-sec" key={i}>
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
            <btn
              onClick={() => {
                setCardId(e?._id);
                setFormState((prev) => {
                  const newArr = [...prev];
                  newArr[index] = {
                    card_name: e?.card_name,
                    country: e?.country,
                    card_type: e?.card_type,
                    denomination: e?.denomination,
                    dollar_rate: e?.dollar_rate,
                    ngn_rate: e?.ngn_rate,
                  };
                  return newArr;
                });
              }}
              className="p-1 duration-500 rounded-lg cursor-pointer bg-active hover:font-normal"
            >
              Edit
            </btn>
            <btn
              onClick={() => {
                deleteCard(e?._id, index);
              }}
              className="bg-[red] p-1 rounded-lg cursor-pointer hover:font-normal duration-500"
            >
              delete
            </btn>
          </td>
        </tr>
      ))}
    </>
  );
};
const initialState = {
  card_name: "",
  country: "",
  card_type: "",
  denomination: 0,
  dollar_rate: 0,
  ngn_rate: 0,
};
const AddGiftcard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedCardType, setCardTypeSelected] = useState();
  const [selectedCountry, setCountrySelected] = useState();
  const { data, isLoading, isSuccess } = useGetGiftCardInfoQuery();
  const [fetchCard, { isLoading: isFetchingCard }] = useLazyGetGiftCardQuery();
  const [createCard, { isLoading: isCreatingCard }] =
    useCreateGiftCardMutation();
  const [datas, setDatas] = useState(giftCard);
  const [cards, setCards] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState([]);
  const [formState, setFormState] = useState([]);
  const [updateCard, { isLoading: isUpdatingCard }] =
    useUpdateGiftCardMutation();
  const [deleteCard, { isLoading: isDeletingCard }] =
    useDeleteGiftCardMutation();
  const [cardId, setCardId] = useState("");
  const handleDelete = (id, index) => {
    deleteCard({ id })
      .unwrap()
      .then(() => {
        toast.success("card deleted");
        setCardId("");
        setFormState((prev) => {
          const newFormState = [...prev];
          newFormState[index] = initialState;
          return newFormState;
        });
      })
      .catch((err) => {
        toast.error(err?.message || err?.msg || "an error occured");
        setCardId("");
        setFormState((prev) => {
          const newFormState = [...prev];
          newFormState[index] = initialState;
          return newFormState;
        });
      });
  };
  const handleSubmit = (newFormState) => {
    setAmount(...amount, newFormState);
  };
  useEffect(() => {
    if (isSuccess)
      data?.map((e) => {
        fetchCard({ name: e.card_name })
          .unwrap()
          .then((res) => {
            setCards((prev) => ({ ...prev, [e.card_name]: res.data }));
            setFormState((prev) => [
              ...prev,
              { ...initialState, card_name: e.card_name },
            ]);
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
    <div className="capitalize relative">
      {(isCreatingCard ||
        isDeletingCard ||
        isUpdatingCard ||
        isLoading ||
        isFetchingCard) && <Loader />}
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
        {data?.map((e, i) => (
          <div key={i} className="flex w-full overflow-x-auto border">
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
                {/* <form
                onSubmit={(e) => {}}
                className="text-xl font-thin text-center border-y"
              > */}
                <td className="p-2 border">
                  <Select
                    disabled={cardId}
                    options={data[i]?.cardSelect}
                    value={formState[i]?.card_type}
                    className="!bg-purple !w-[10rem]"
                    onSelect={(value) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          card_type: value,
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>

                <td className="p-2 border">
                  <Select
                    disabled={cardId}
                    options={data[i]?.countriesSelect}
                    value={formState[i]?.country}
                    className="!bg-purple !w-[10rem]"
                    onSelect={(value) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          country: value,
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>

                <td className="p-2 border">
                  <Select
                    disabled={cardId}
                    options={data[i]?.denominationsSelect}
                    value={formState[i]?.denomination}
                    className="!bg-purple !w-[10rem]"
                    onSelect={(value) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          denomination: value,
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>

                <td className="p-2 border ">
                  <input
                    value={formState[i]?.dollar_rate}
                    className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                    type="number"
                    onChange={(e) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          dollar_rate: Number(e.target.value),
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>
                <td className="p-2 border">
                  <input
                    value={formState[i]?.ngn_rate}
                    className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                    type="number"
                    disabled={cardId}
                    onChange={(e) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          ngn_rate: Number(e.target.value),
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>
                <td className="p-2 border">
                  <Button
                    type="primary"
                    onClick={() => {
                      if (cardId) {
                        updateCard({
                          payload: { dollar_rate: formState[i].dollar_rate },
                          id: cardId,
                        })
                          .unwrap()
                          .then((res) => {
                            toast.success("card updated");
                            setFormState((prev) => {
                              const newFormState = [...prev];
                              newFormState[i] = initialState;
                              return newFormState;
                            });
                            setCardId("");
                          })
                          .catch((err) => {
                            toast.error(
                              err.message ||
                                err.msg ||
                                err?.data?.message ||
                                err?.data?.msg ||
                                "an error occured"
                            );
                            setFormState((prev) => {
                              const newFormState = [...prev];
                              newFormState[i] = initialState;
                              return newFormState;
                            });
                            setCardId("");
                          });
                      } else {
                        createCard(formState[i])
                          .unwrap()
                          .then((res) => {
                            toast.success("card created");
                            setFormState((prev) => {
                              const newFormState = [...prev];
                              newFormState[i] = initialState;
                              return newFormState;
                            });
                          })
                          .catch((err) => {
                            toast.error(
                              err.message ||
                                err.msg ||
                                err?.data?.message ||
                                err?.data?.msg ||
                                "an error occured"
                            );
                            setFormState((prev) => {
                              const newFormState = [...prev];
                              newFormState[i] = initialState;
                              return newFormState;
                            });
                          });
                      }
                    }}
                    className="rounded-lg !bg-[green] p-1 !w-full"
                  >
                    Submit
                  </Button>
                </td>
                {/* </form> */}
                <DisplayData
                  setCardId={setCardId}
                  data={cards[e?.card_name] || []}
                  deleteCard={handleDelete}
                  index={i}
                  setFormState={setFormState}
                />
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGiftcard;
