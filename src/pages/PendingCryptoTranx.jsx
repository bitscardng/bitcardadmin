import PendingCryptoTable from "../components/antd/PendingCryptoTable";
import Search from "../components/Search";

const PendingCryptoTranx = () => {
  return (
    <div className="capitalize ">
      <Search
        // value={}
        onChange={(e) => {
          // setSearch(e.target.value);
        }}
      />
      <div className="mt-4">
        <PendingCryptoTable />
      </div>
    </div>
  );
};

export default PendingCryptoTranx;
