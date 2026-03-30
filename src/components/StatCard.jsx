import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition ">

      {/* TOP */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-500">{title}</p>

        <div className="p-2 bg-gray-100 rounded-lg">
          {Icon && <Icon size={18} className="text-gray-600" />}
        </div>
      </div>

      {/* VALUE */}
      <h2 className="text-2xl font-bold text-gray-800">
        {value}
      </h2>

      {/* CHANGE */}
      <div className="flex items-center gap-1 mt-2 text-sm">
        {isPositive ? (
          <ArrowUpRight size={16} className="text-green-500" />
        ) : (
          <ArrowDownRight size={16} className="text-red-500" />
        )}

        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {change}
        </span>

        <span className="text-gray-400">vs last month</span>
      </div>

    </div>
  );
}