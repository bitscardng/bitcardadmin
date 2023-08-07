import { useState } from "react";
import Search from "../components/Search";
import Kyc4Table from "../components/antd/Kyc4Table";
const Kyc4 = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Kyc4Table />
    </div>
  );
};

export default Kyc4;
