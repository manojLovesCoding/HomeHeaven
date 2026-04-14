export default function Insights() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Host Insights</h3>
        <p className="text-sm text-gray-500">
          Properties with fast-wifi tags are seeing a 15% increase in bookings.
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Recent Messages</h3>
        <p className="text-sm text-gray-500">Sophia: Can we check in early?</p>
        <p className="text-sm text-gray-500">Liam: Wifi not working...</p>
      </div>
    </div>
  );
}