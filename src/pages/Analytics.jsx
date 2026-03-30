import MainChart from "../components/MainChart";
import BarChartBox from "../components/BarChartBox";
import PieChartBox from "../components/PieChartBox";

export default function Analytics() {
  return (
    <div className="space-y-6">

      {/* 🔥 HEADER */}
      <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
        Analytics Overview
      </h1>

      {/* 🔥 MAIN CHART */}
      <MainChart />

      {/* 🔥 BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <BarChartBox />

        <PieChartBox />

        {/* INSIGHTS CARD */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="mb-3 font-semibold text-gray-700">
            Insights
          </h3>

          <ul className="text-sm space-y-2 text-gray-600">
            <li>📈 Revenue increased by 18%</li>
            <li>👥 Users growth steady</li>
            <li>🛒 Orders slightly down</li>
            <li>🚀 Performance improved</li>
          </ul>
        </div>

      </div>

    </div>
  );
}