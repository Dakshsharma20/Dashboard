import StatCard from "../components/StatCard";
import { Users, DollarSign, TrendingUp, ShoppingCart } from "lucide-react";
import MainChart from "../components/MainChart";
import ProgressCard from "../components/ProgressCard";
import BarChartBox from "../components/BarChartBox";
import PieChartBox from "../components/PieChartBox";
import ActivityTable from "../components/ActivityTable";
import GreetingBanner from "../components/GreetingBanner";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* 🔥 BANNER */}
      <GreetingBanner />

      {/* 🔥 STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Users" value="1,974" change="+12%" icon={Users} />
        <StatCard title="Revenue" value="$12,430" change="+8%" icon={DollarSign} />
        <StatCard title="Growth" value="+18%" change="+5%" icon={TrendingUp} />
        <StatCard
          title="Orders"
          value="320"
          change="-3%"
          isPositive={false}
          icon={ShoppingCart}
        />
      </div>

      {/* 🔥 CHART + SIDE CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* CHART */}
        <div className="lg:col-span-2">
          <MainChart />
        </div>

        {/* SIDE CARD */}
        <div className="h-fit">
          <ProgressCard />
        </div>

      </div>

      {/* 🔥 BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <BarChartBox />

        <PieChartBox />

        <ActivityTable />

      </div>

    </div>
  );
}