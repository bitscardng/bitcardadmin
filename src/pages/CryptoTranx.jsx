import CryptoTable from "../components/antd/CryptoTable";
import Search from "../components/Search";

const CryptoTranx = () => {
  return (
    <div>
      <Search
        // value={}
        onChange={(e) => {
          // setSearch(e.target.value);
        }}
      />
      <div className="mt-4">
        <CryptoTable />
      </div>
    </div>
  );
};

export default CryptoTranx;
