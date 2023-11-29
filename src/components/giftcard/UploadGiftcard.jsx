import React, { useState, useEffect } from "react";
import { MdCloudUpload } from "react-icons/md";
import style from "../../styles.module.css";
import { aus, usa, uk, spain, switz, can, ger } from "../../assets";
import { styles } from "../../styles";
import { toast } from "react-toastify";
import { useUploadFileMutation } from "../../api/apiSlice";
import { useCreateGiftCardInfoMutation } from "../../api/giftCardService";
import { Btn as Button } from "../antd/Btn";

const giftCard = [
  { id: "rad1", value: "E-code" },
  { id: "rad2", value: "Physical" },
  { id: "rad3", value: "Cash Receipt" },
  { id: "rad4", value: "Credit Receipt" },
  { id: "rad5", value: "Debit Receipt" },
  { id: "rad6", value: "No Receipt" },
];

const country = [
  { id: "radio01", value: "USA", photo: usa },
  { id: "radio02", value: "UK", photo: uk },
  { id: "radio03", value: "Australia", photo: aus },
  { id: "radio04", value: "Canada", photo: can },
  { id: "radio05", value: "New Zealand", photo: aus },
  { id: "radio06", value: "Germany", photo: ger },
  { id: "radio07", value: "Spain", photo: spain },
  { id: "radio08", value: "Switzerland", photo: switz },
];

const denomination = [
  { id: "rad01", value: 10, label: "10-49" },
  { id: "rad02", value: 50, label: "50-99" },
  { id: "rad03", value: 100, label: "100" },
  { id: "rad04", value: 200, label: "101-200" },
  { id: "rad05", value: 300, label: "200-300" },
  { id: "rad06", value: 500, label: "300-500" },
  { id: "rad07", value: 5000, label: "501-5000" },
  // { id: "rad08", value: "501-5000",label:"501-500" },
];

const UploadGiftcard = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState({});
  const [denominations, setDenominations] = useState({ 10: "10" });
  const [giftcards, setGiftCards] = useState({});
  const [uploadFile, { isUploading }] = useUploadFileMutation();
  const [cardInfo, setCardInfo] = useState({
    card_image: null,
    card_name: "",
    countries: [],
    card_types: [],
    denominations: [],
  });
  const [createCard, { isLoading }] = useCreateGiftCardInfoMutation();
  const [denominationCheck, setDenominationCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleImageChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    uploadFile(formData)
      .unwrap()
      .then((res) => {
        setCardInfo((prev) => ({ ...prev, card_image: res?.url }));
      })
      .catch(() => {
        toast.error("error uploading image");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cards = Object.values(giftcards).filter((value) => value);
    const countrieslist = Object.values(countries).filter((value) => value);
    const denominationsList = Object.values(denominations).filter(
      (value) => value
    );
    console.log(cards, countrieslist, denominationsList);
    createCard({
      ...cardInfo,
      card_types: cards,
      countries: countrieslist,
      denominations: denominationsList,
    })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("card created successfully");
        setCardInfo({
          card_image: "",
          card_name: "",
          countries: [],
          card_types: [],
          denominations: [],
        });
        setDenominations({});
        setCountries({});
        setGiftCards({});
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <p className={`${styles.topic} mb-0`}>upload new gift card</p>
      <form
        onSubmit={handleSubmit}
        className="p-4 my-6 border-2 border-sec rounded-2xl"
      >
        <div className="flex flex-row items-end justify-evenly ">
          <div
            onClick={() => document.querySelector(".image-field").click()}
            className="flex flex-col items-center justify-center w-64 h-64 border-2 border-white border-dashed rounded-full hero hover:text-active hover:border-active"
          >
            <input
              id="image"
              type="file"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleImageChange(e)}
              required
              className="hidden image-field"
            />
            {cardInfo?.card_image ? (
              <img
                src={cardInfo?.card_image}
                className="object-cover w-full h-full p-1 rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center w-40 text-center">
                <MdCloudUpload className="w-20 h-20" />
                <div className="">
                  {isUploading ? (
                    <div>
                      Uploading
                      <span className="loading loading-dots loading-md"></span>
                    </div>
                  ) : (
                    <p>Upload giftcard image ( jpeg, svg, png)</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Gift Card Name</p>
            <input
              type="text"
              name="card_name"
              value={cardInfo?.card_name}
              required
              onChange={handleInputChange}
              placeholder="itunes"
              className="p-2 px-4 capitalize rounded-full outline-none bg-sec"
            />
          </div>
        </div>

        <div className="p-4 pt-8">
          <p className="pb-2 font-bold text-start text-active">
            Country / Flag ( Multi-Select )
          </p>
          <div className={`${style.columnBox}`}>
            {country.map((item, i) => {
              return (
                <div className="flex items-center justify-start gap-2" key={i}>
                  <input
                    type="checkbox"
                    name={item.id}
                    id={item.id}
                    value={item.value}
                    className="checkbox text-sec peer"
                    onChange={(e) => {
                      const { checked, value, name } = e.target;
                      setCountries((prev) => ({
                        ...prev,
                        [name]: checked ? value : null,
                      }));
                    }}
                  />
                  <label
                    for={item.id}
                    className="p-2 px-4 my-2 rounded-full cursor-pointer bg-sec hover:bg-active peer-checked:bg-active"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {item.value}
                      <img
                        src={item.photo}
                        alt="pic"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 pt-8">
          <p className="pb-2 font-bold text-start text-active">
            Gift Card Type ( Multi-Select )
          </p>
          <div className={`${style.columnBox}`}>
            {giftCard.map((item, i) => {
              return (
                <div className="flex items-center justify-start gap-2 " key={i}>
                  <input
                    type="checkbox"
                    name={item.id}
                    id={item.id}
                    value={item.value}
                    className="checkbox text-sec peer"
                    onChange={(e) => {
                      const { checked, value, name } = e.target;
                      setGiftCards((prev) => ({
                        ...prev,
                        [name]: checked ? value : null,
                      }));
                    }}
                  />
                  <label
                    for={item.id}
                    className="p-2 px-4 my-2 rounded-full cursor-pointer bg-sec hover:bg-active peer-checked:bg-active"
                  >
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-4 pt-8">
          <p className="pb-2 font-bold text-start text-active">
            Giftcard Denomination( Multi-Select)
          </p>
          <div className={`${style.columnBox}`}>
            {denomination.map((item, i) => {
              return (
                <div key={i} className="flex items-center justify-start gap-2 ">
                  <input
                    type="checkbox"
                    name={item.label}
                    id={item.id}
                    value={item.value}
                    // checked={Object.keys(denominations).includes(item.value)}
                    className="checkbox text-sec peer"
                    onChange={(e) => {
                      const { checked, value } = e.target;
                      setDenominations((prev) => ({
                        ...prev,
                        [value]: checked ? value : null,
                      }));
                    }}
                  />
                  <label
                    for={item.id}
                    className="p-2 px-4 my-2 rounded-full cursor-pointer bg-sec hover:bg-active peer-checked:bg-active"
                  >
                    {item.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <Button
          htmlType="submit"
          type="primary"
          loading={isLoading}
          className="!rounded-2xl !w-[20%]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadGiftcard;
