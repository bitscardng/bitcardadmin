import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";
import style from "../../styles.module.css";
import { aus, usa, uk, spain, switz, can, ger } from "../../assets";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

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
  { id: "rad01", value: "10-49" },
  { id: "rad02", value: "50-99" },
  { id: "rad03", value: "100" },
  { id: "rad04", value: "101-199" },
  { id: "rad05", value: "200-299" },
  { id: "rad06", value: "300-499" },
  { id: "rad07", value: "500" },
  { id: "rad08", value: "501-5000" },
];

const UploadBuyGiftCard = ({ upload }) => {
  const [uploadImage, setUploadImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    setUploadImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div>
        <Link
          to="../"
          relative="path"
          className="absolute p-2 ml-2 rounded-full cursor-pointer bg-sec text-active hover:bg-active hover:text-sec"
        >
          <TiArrowBackOutline />
        </Link>
        <p className={`${styles.topic} mb-0`}>upload new gift card</p>
      </div>
      <div className="p-4 my-6 border-2 border-sec rounded-2xl">
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
            {imagePreview != null ? (
              <img
                src={imagePreview}
                className="object-cover w-full h-full p-1 rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center w-40 text-center">
                <MdCloudUpload className="w-20 h-20" />
                <p className="">Upload giftcard image ( jpeg, svg, png)</p>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Gift Card Name</p>
            <input
              type="text"
              name="name"
              value={upload?.name}
              required
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
                    type="radio"
                    name=""
                    id={item.id}
                    value={item.value}
                    className="radio text-sec peer"
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
                    type="radio"
                    name=""
                    id={item.id}
                    value={item.value}
                    className="radio text-sec peer"
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
                <div className="flex items-center justify-start gap-2 ">
                  <input
                    type="radio"
                    name=""
                    id={item.id}
                    value={item.value}
                    className="radio text-sec peer"
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
        <button className={`${styles.btn}`}>Submit</button>
      </div>
    </div>
  );
};

export default UploadBuyGiftCard;
