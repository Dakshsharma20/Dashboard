import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 900 },
  { name: "May", value: 600 },
  { name: "Jun", value: 800 },
];


function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-3 py-2 rounded-lg shadow text-sm">
        <p className="font-medium">{payload[0].value}</p>
      </div>
    );
  }
  return null;
}

export default function MainChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">


      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Analytics Overview
        </h2>
        <span className="text-sm text-gray-400">
          Last 6 months
        </span>
      </div>

    
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>

        
          <defs>
            <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>

          
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />

          
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />

          
          <Tooltip content={<CustomTooltip />} />

          
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={3}
            fill="url(#colorData)"
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}