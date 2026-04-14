import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { m: "Jun", v: 4000 },
  { m: "Jul", v: 5000 },
  { m: "Aug", v: 4500 },
  { m: "Sep", v: 6500 },
  { m: "Oct", v: 7500 },
  { m: "Nov", v: 8200 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-card">
      <div className="flex justify-between mb-2">
        <div>
          <h3 className="text-[15px] font-semibold">
            Revenue Trends
          </h3>
          <p className="text-xs text-gray-400">
            Monthly earnings over the last 6 months
          </p>
        </div>
        <span className="text-green-500 text-xs">+18%</span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.4}/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="m" axisLine={false} tickLine={false} />
          <Tooltip />

          <Area
            dataKey="v"
            stroke="#06b6d4"
            fill="url(#grad)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}