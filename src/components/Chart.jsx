import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  return (
    <div className="p-4 text-white bg-sec rounded-2xl">
      <Line
        data={{
          labels: ["June 1", "June 2", "June 3", "June 4", "June 5", "June 6"],
          datasets: [
            {
              label: "CRYPTO",
              data: [21000, 16000, 13500, 15000, 18000, 17000],
              backgroundColor: "#885DF5",
              borderColor: "#885DF5",
              tension: 0.3,
            },
            {
              label: "GIFTCARD",
              data: [19000, 12000, 17500, 15000, 20000, 13000],
              backgroundColor: "#00C566",
              borderColor: "#00C566",
              tension: 0.3,
            },
            {
              label: "USD DEPOSIT",
              data: [17000, 13000, 11500, 13000, 16000, 14000],
              backgroundColor: "#219DFC",
              borderColor: "#219DFC",
              tension: 0.3,
            },
            {
              label: "NGN DEPOSIT",
              data: [17000, 9000, 13500, 16000, 21000, 15000],
              backgroundColor: "#FCB721",
              borderColor: "#FCB721",
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
            title: {
              display: true,
              text: "",
              color: "#ffffff",
            },
          },
          scales: {
            x: {
              grid: { display: true },
              ticks: { color: "white" },
            },
            y: {
              grid: { display: true },
              ticks: {
                color: "white",
                callback: (value) => "$  " + value,
                stepSize: "",
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
