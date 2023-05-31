import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import Search from "../Search";
import { styles } from "../../styles";

const UploadGiftcard = ({ upload }) => {
  const [search, setSearch] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    setUploadImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="flex items-center gap-20 pb-2 text-center">
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <p className="text-2xl font-bold text-end">Upload New Gift Card</p>
      </div>
      <div className="p-4 my-6 border-2 border-sec rounded-2xl">
        <div className="flex flex-row items-center justify-evenly ">
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
              className="p-2 capitalize rounded-full outline-none bg-sec"
            />
          </div>
        </div>
        <div className="p-2">
          <p className="font-bold">Gift Card Type ( Multi-Select )</p>
          <div className="flex">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadGiftcard;
