import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { giftCard } from "../../constant";
import { FiArrowDownCircle } from "react-icons/fi";
import { Select } from "antd";
import {
  useGetGiftCardBuyInfoQuery,
  useCreateGiftCardMutation,
  useCreateBuyGiftCardMutation,
  useLazyGetBuyGiftCardQuery,
  useUpdateGiftCardMutation,
  useDeleteGiftCardMutation,
  useDeleteGiftCardInfoMutation,
} from "../../api/giftCardService";
import { useUpdateNgnRateMutation } from "../../api/cryptoQueries";
import { useGetCryptoRatesQuery } from "../../api/cryptoQueries";
import { Btn as Button } from "../antd/Btn";
import { toast } from "react-toastify";
import Loader from "../Loader";

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
            {/* <btn
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
            </btn> */}
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
const AddBuyGiftcard = () => {
  const { data, isLoading, isSuccess } = useGetGiftCardBuyInfoQuery();
  const [fetchCard, { isLoading: isFetchingCard }] =
    useLazyGetBuyGiftCardQuery();
  const [createCard, { isLoading: isCreatingCard }] =
  useCreateBuyGiftCardMutation();
  const { data: rates, isLoading: isFetchingRate } = useGetCryptoRatesQuery();
  const [updateRate, { isLoading: isUpdatingRate }] =
    useUpdateNgnRateMutation();
  const [cards, setCards] = useState({});
  const [editNgn, setEditNgn] = useState(true);
  const [ngnRate, setNgnRate] = useState();
  const [formState, setFormState] = useState([]);
  const [updateCard, { isLoading: isUpdatingCard }] =
    useUpdateGiftCardMutation();
  const [deleteCard, { isLoading: isDeletingCard }] =
    useDeleteGiftCardMutation();
  const [deleteCardInfo, { isLoading: isDeletingCardInfo }] = useDeleteGiftCardInfoMutation();
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
        window.location.reload();
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

  const handleDeleteCardInfo = (card_name, index) => {
    deleteCardInfo({ card_name })
      .unwrap()
      .then(() => {
        toast.success("card deleted");
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err?.message || err?.msg || "an error occured");
      });
  };

  console.log(formState);
  useEffect(() => {
    if (isSuccess)
      data?.map((e) => {
        fetchCard({ name: e.card_name })
          .unwrap()
          .then((res) => {
            setCards((prev) => ({ ...prev, [e.card_name]: res.data }));
            setFormState([
              { ...initialState, card_name: e.card_name },
            ]);
          });
      });
  }, [isSuccess, data]);
  return (
    <div className="capitalize relative">
      {(isCreatingCard ||
        isDeletingCard ||
        isUpdatingCard ||
        isLoading ||
        isFetchingCard) && <Loader />}
      <p className={`${styles.topic} mb-0`}>add new buy gift card</p>
      <div className="flex items-center justify-around py-6">
        <p className="text-end">
          {/* Add Rate */}
          <input
              className="p-2 px-4 rounded-full bg-sec"
              placeholder="search"
            />
        </p>
        <div className="flex items-center justify-between gap-8">
          <p className="p-2 px-6 rounded-full bg-white text-active">
            <span className="pl-2 text-xl font-semibold text-center text-black">
              
            </span>
            <input
              className="text-xl font-semibold text-center text-black w-[5rem]"
              value={ngnRate || rates?.data?.usd?.buy}
              defaultValue={rates?.data?.usd?.buy}
              disabled={editNgn}
              onChange={(e) => {
                setNgnRate(e.target.value);
              }}
            />
          </p>
          <div
            className={`${styles.btn} max-w-fit px-10 `}
            onClick={() => {
              setEditNgn((prev) => {
                if (!prev) {
                  updateRate({ ngn_rate: Number(ngnRate) })
                    .unwrap()
                    .then(() => {
                      toast.success("ngn rate updated");
                      setEditNgn(true);
                      setNgnRate(null);
                    });
                }
                return !prev;
              });
            }}
          >
            {editNgn ? "Edit" : "Update"}
          </div>
          {/* <p className="p-2 px-4 rounded-full bg-sec text-active">
            Profit :
            <span className="pl-2 text-xl font-semibold text-center text-white">
              {"30"}
            </span>
          </p> */}
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
              <btn
                className="bg-[red] p-1 rounded-lg cursor-pointer hover:font-normal duration-500 ml-6 px-6"
                onClick={() => {
                  handleDeleteCardInfo(e?.card_name, i)
                }}
              >
                delete
              </btn>
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
                    value={rates?.data?.usd?.buy}
                    className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                    type="number"
                    disabled={true}
                    onChange={(e) => {
                      setFormState((prev) => {
                        const newArr = [...prev];
                        newArr[i] = {
                          ...newArr[i],
                          dollar_rate: e.target.value,
                        };
                        return newArr;
                      });
                    }}
                  />
                </td>
                <td className="p-2 border">
                  <input
                    value={rates?.data?.usd?.buy}
                    className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                    type="number"
                    disabled={cardId}
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
                            window.location.reload();
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
                        createCard({
                          ...formState[i],
                          card_name: e?.card_name,
                          ngn_rate: rates?.data?.usd.buy,
                          dollar_rate: rates?.data?.usd.buy,
                        })
                          .unwrap()
                          .then((res) => {
                            toast.success("card created");
                            setFormState((prev) => {
                              const newFormState = [...prev];
                              newFormState[i] = initialState;
                              return newFormState;
                            });
                            window.location.reload();
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
                              newFormState[i] = {
                                ...initialState,
                                card_name: e?.card_name,
                              };
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

export default AddBuyGiftcard;
