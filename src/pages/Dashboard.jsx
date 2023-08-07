import { useEffect } from "react";
import Bitcoin from "../assets/Bitcoin.svg";
import Chart2 from "../components/Chart2";
import style from "../styles.module.css";
import { useGetDashboardStatsQuery } from "../api/dashboardStats";

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStatsQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col gap-[1rem] uppercase">
      <div className={`${style.columnBox} gap-2`}>
        {data?.data?.trade.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 p-2 rounded-2xl bg-sec"
          >
            <h5>{data?.tradeName}</h5>
            <p className="text-2xl font-semibold uppercase text-active">
              {data?.tradeAmount}
            </p>
          </div>
        ))}
      </div>

      <div className={`${style.columnBox} gap-2`}>
        {data?.data.withdraw.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 p-2 rounded-2xl bg-sec"
          >
            <div className="flex flex-row items-center justify-between gap-2 place-items-end">
              <h5 className="uppercase">{data?.withdrawName}</h5>
              <img src={Bitcoin} alt="bit" />
            </div>
            <p className="text-2xl font-semibold text-active">
              {data?.withdrawAmount}
            </p>
          </div>
        ))}
      </div>

      <div className={`${style.columnBox} gap-2`}>
        {data?.data.total.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 p-2 rounded-2xl bg-sec"
          >
            <h5 className="uppercase">{data?.totalName}</h5>
            <p className="text-2xl font-semibold text-active">
              {data?.totalAmount}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className={`${style.columnBox} gap-2`}>
          {data?.data.cards.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-1 p-2 rounded-2xl bg-sec"
            >
              <h5 className="uppercase">{data?.totalName}</h5>
              <p className="text-2xl font-semibold text-active">
                {data?.totalAmount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex flex-col w-full gap-2 mx-2`}>
        <div className="h-[200px] bg-sec py-[0.5rem] rounded-xl w-full">
          <Chart2 stroke1={"#00C566"} stroke2={"#885DF5"} />
        </div>
        <div className="h-[200px] bg-sec py-[0.5rem] rounded-xl w-full">
          <Chart2 stroke1={"#219DFC"} stroke2={"#FCB721"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
