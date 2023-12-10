import { styles } from "../styles";
import NgnTable from "../components/antd/NgnTable";

const NgnDeposit = () => {
  return (
    <div>
      <p className={`${styles.topic} mb-0`}>naira deposit</p>
      <NgnTable />
    </div>
  );
};

export default NgnDeposit;
