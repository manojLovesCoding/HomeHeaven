const rows = [
  {
    name: "Marcus Aurelius",
    property: "Modern Loft in Soho",
    status: "Confirmed",
    amount: "$840.00",
  },
  {
    name: "Elena Gilbert",
    property: "Coastal Villa Retreat",
    status: "Pending",
    amount: "$2,100.00",
  },
];

export default function Reservations() {
  return (
    <div className="bg-white p-5 rounded-xl border">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Upcoming Reservations</h3>
        <button className="text-sm text-gray-500 border px-3 py-1 rounded">
          Full Calendar
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-400 text-left">
          <tr>
            <th className="pb-2">Guest</th>
            <th>Property</th>
            <th>Status</th>
            <th>Earnings</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="py-3 font-medium">{r.name}</td>
              <td>{r.property}</td>

              <td>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  r.status === "Confirmed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}>
                  {r.status}
                </span>
              </td>

              <td>{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}