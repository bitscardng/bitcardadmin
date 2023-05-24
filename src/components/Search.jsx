import React from "react";
import { BiSearch, BiMenuAltRight } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <div className="rounded-full form-control bg-sec w-fit">
      <div className="flex items-center px-1 rounded-full">
        <button className="px-4 text-2xl rounded-full bg-sec">
          <BiSearch />
        </button>
        <input
          type="text"
          placeholder="Search…"
          value={value}
          onChange={onChange}
          className="w-full max-w-xs p-4 rounded-full outline-none bg-sec"
        />
        <BiMenuAltRight className="mx-2 text-3xl"/>
      </div>
    </div>
  );
};

export default Search;
