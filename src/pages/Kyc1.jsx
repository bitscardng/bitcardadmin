import React, { useState } from "react";
import Search from "../components/Search";
import {
  useGetKyc1_2Query,
  useVerifyKyc1_2Mutation,
  useDeclineKyc1_2Mutation,
} from "../api/kycQueries";
import Kyc1Table from "../components/antd/Kyc1Table";

const Kyc1 = () => {
  const [search, setSearch] = useState("");
  const { data = [], isLoading } = useGetKyc1_2Query();

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="mt-4">
        <Kyc1Table />
      </div>
    </div>
  );
};

export default Kyc1;
