export default function RightPanel() {
  return (
    <div className="space-y-5">
      {/* Insights */}
      <div className="bg-cyan-50 p-4 rounded-xl">
        <h4 className="font-medium text-sm mb-1">
          Host Insights
        </h4>
        <p className="text-xs text-gray-600">
          Properties with fast-wifi tags are seeing a 15% increase in winter bookings.
        </p>

        <button className="text-primary text-xs mt-2">
          Optimize your listings →
        </button>
      </div>

      {/* Messages */}
      <div className="bg-white p-4 rounded-xl border shadow-card">
        <h4 className="font-medium text-sm mb-3">
          Recent Messages
        </h4>

        {["Sophia", "Liam", "Mia"].map((name, i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-gray-400">
                Sample message preview...
              </p>
            </div>
          </div>
        ))}

        <button className="w-full border mt-2 py-2 text-sm rounded-lg">
          View All Messages
        </button>
      </div>
    </div>
  );
}