import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import Reservations from "../components/Reservations";
import Properties from "../components/Properties";
import RightPanel from "../components/RightPanel";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-[22px] font-semibold">
        Welcome back, Alexander
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        You have 12 active guests staying across your properties today.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        <StatsCard title="Total Earnings" value="$12,840.00" sub="+12.5%" />
        <StatsCard title="Active Listings" value="8 Properties" sub="2 pending" />
        <StatsCard title="Average Occupancy" value="94.2%" sub="+4.1%" />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* LEFT SIDE (2 columns) */}
        <div className="col-span-2 space-y-6">
          <Reservations />
          <Properties />
        </div>

        {/* RIGHT SIDE (1 column) */}
        <div className="space-y-6">
          <RevenueChart />
          <RightPanel />
        </div>

      </div>
    </div>
  );
}