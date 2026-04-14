export default function StatsCard({ title, value, sub }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-card border">
      <div className="flex justify-between text-[13px] text-gray-500">
        <span>{title}</span>
        <span className="text-green-500">{sub}</span>
      </div>

      <h2 className="text-[22px] font-semibold mt-3">
        {value}
      </h2>
    </div>
  );
}