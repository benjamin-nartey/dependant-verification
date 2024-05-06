import { useEffect } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const dataTest = [
  {
    name: "Males",
    total: 1288,
  },
  {
    name: "Females",
    total: 3288,
  },
];

export default function AreaChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ right: 20, left: 20, top: 20, bottom: 20 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Legend />
        <Tooltip />
        <Bar
          type="monotone"
          stroke="#2563eb"
          fill="#3b82f6"
          dataKey="total"
          stackId="1"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
