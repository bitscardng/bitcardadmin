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
import { data } from "../../constant/chartData";

const CampaignTable = ({ stroke1, stroke2 }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <Line type="monotone" dataKey="Twitter" stroke={stroke1} />
        <Line type="monotone" dataKey="Instagram" stroke={stroke2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CampaignTable;
