import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { giftCard } from "../../constant";
import { FiArrowDownCircle } from "react-icons/fi";
import { Select } from "antd";
import {
  useGetGiftCardSellInfoQuery,
  useCreateGiftCardMutation,
  useLazyGetSellGiftCardQuery,
  useUpdateGiftCardMutation,
  useDeleteGiftCardMutation,
  useDeleteGiftCardInfoMutation,
} from "../../api/giftCardService";
import { useUpdateRmdRateMutation } from "../../api/cryptoQueries";
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
  const { data, isLoading, isSuccess } = useGetGiftCardSellInfoQuery();
  const [fetchCard, { isLoading: isFetchingCard }] =
    useLazyGetSellGiftCardQuery();
  const [createCard, { isLoading: isCreatingCard }] =
    useCreateGiftCardMutation();
  const { data: rates, isLoading: isFetchingRate } = useGetCryptoRatesQuery();
  const [updateRate, { isLoading: isUpdatingRate }] =
    useUpdateRmdRateMutation();
  const [cards, setCards] = useState({});
  const [editRmd, setEditRmd] = useState(true);
  const [rmdRate, setRmdRate] = useState();
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

  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      data?.map((e) => {
        fetchCard({ name: e.card_name })
          .unwrap()
          .then((res) => {
            console.log(res);
            setCards((prev) => ({ ...prev, [e.card_name]: res.data }));
            setFormState((prev) => [
              ...prev,
              { ...initialState, card_name: e.card_name },
            ]);
          });
      });
    }
  }, [isSuccess, data]);
  return (
    <div className="capitalize relative">
      {(isCreatingCard ||
        isDeletingCard ||
        isUpdatingCard ||
        isLoading ||
        isFetchingCard) && <Loader />}
      <p className={`${styles.topic} mb-0`}>add new sell gift card</p>
      <div className="flex items-center justify-between p-2">
        <p className="text-2xl font-bold text-end">Add Rate</p>
        <div className="flex items-center justify-between gap-8">
          <p className="p-2 px-4 rounded-full bg-sec text-active">
            RMD :
            {/* <span className="pl-2 text-xl font-semibold text-center text-white">
              {rates?.data?.rmd_rate}
            </span> */}
            <input
              className="pl-2 text-xl font-semibold text-center text-white w-[5rem]"
              value={rmdRate || rates?.data?.rmd_rate}
              defaultValue={rates?.data?.rmd_rate}
              disabled={editRmd}
              onChange={(e) => {
                setRmdRate(e.target.value);
              }}
            />
          </p>
          <div
            className={`${styles.btn} max-w-fit px-10 `}
            onClick={() => {
              setEditRmd((prev) => {
                if (!prev) {
                  updateRate({ rmd_rate: Number(rmdRate) })
                    .unwrap()
                    .then(() => {
                      toast.success("rmd rate updated");
                      setEditRmd(true);
                      setRmdRate(null);
                    });
                }
                return !prev;
              });
            }}
          >
            {editRmd ? "Edit" : "Update"}
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
                    value={formState[i]?.dollar_rate}
                    className="w-20 p-1 font-normal text-black bg-white border rounded-lg outline-none"
                    type="number"
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
                    value={
                      formState[i]?.dollar_rate * rates?.data?.rmd_rate - 30
                    }
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
                          ngn_rate:
                            formState[i]?.dollar_rate * rates?.data?.rmd_rate -
                            30,
                          dollar_rate: Number(formState[i]?.dollar_rate),
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

export default AddGiftcard;
