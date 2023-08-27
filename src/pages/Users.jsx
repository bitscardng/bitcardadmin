import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../components/Search";
import { giftCard } from "../constant";
import { Link } from "react-router-dom";
import UsersTable from "../components/antd/UsersTable";

const Users = () => {
  const [search, setSearch] = useState("");
  //pagination end
  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="mt-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
