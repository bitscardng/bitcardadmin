import { useState } from "react";
import Search from "../components/Search";
<<<<<<< HEAD
=======
import {
  useGetKyc1_2Query,
  useVerifyKyc1_2Mutation,
  useDeclineKyc1_2Mutation,
} from "../api/kycQueries";
>>>>>>> a3b6aab6b00b163e9eeea51e2824189a7600b679
import Kyc1Table from "../components/antd/Kyc1Table";

const Kyc1 = () => {
  const [search, setSearch] = useState("");
<<<<<<< HEAD
=======
  const { data = [], isLoading } = useGetKyc1_2Query();

>>>>>>> a3b6aab6b00b163e9eeea51e2824189a7600b679
  return (
    <div>
      <Search
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
<<<<<<< HEAD
      <Kyc1Table />
=======
      <div className="mt-4">
        <Kyc1Table />
      </div>
>>>>>>> a3b6aab6b00b163e9eeea51e2824189a7600b679
    </div>
  );
};

export default Kyc1;
