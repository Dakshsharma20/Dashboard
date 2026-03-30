import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 60 },
];

export default function BarChartBox() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="mb-3 font-semibold text-gray-700">Sales</h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}