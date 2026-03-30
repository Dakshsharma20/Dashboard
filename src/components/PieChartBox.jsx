import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 60 },
  { name: "B", value: 40 },
];

export default function PieChartBox() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="mb-3 font-semibold text-gray-700">Users Split</h3>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            fill="#f97316"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}