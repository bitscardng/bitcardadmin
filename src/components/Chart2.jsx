import React from "react";
import {
  LineChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { data } from "../constant/chartData";

const Chart2 = ({ stroke1, stroke2 }) => {
  return (
    <ResponsiveContainer width={700} height="100%">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend layout="top" />
        <Line type="monotone" dataKey="giftCard" stroke={stroke1} />
        <Line type="monotone" dataKey="crypto" stroke={stroke2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart2;
