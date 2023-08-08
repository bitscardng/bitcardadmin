import { useState } from "react";
import Search from "../components/Search";
import Kyc1Table from "../components/antd/Kyc1Table";

const Kyc1 = () => {
  const [search, setSearch] = useState("");
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
