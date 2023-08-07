import { useState } from "react";
import Search from "../components/Search";
import Kyc3Table from "../components/antd/Kyc3Table";
const Kyc3 = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Kyc3Table />
    </div>
  );
};

export default Kyc3;
