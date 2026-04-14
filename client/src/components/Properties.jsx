export default function Properties() {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-card">
      <div className="flex justify-between mb-4">
        <h3 className="font-medium">Manage Properties</h3>
        <button className="bg-primary text-white px-3 py-1 text-sm rounded-lg">
          + Add Listing
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {["Modern Loft", "Villa Retreat"].map((p, i) => (
          <div key={i} className="flex gap-3 border rounded-lg p-2">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>

            <div>
              <p className="text-sm font-medium">{p}</p>
              <p className="text-xs text-gray-400">$280/night</p>
              <p className="text-xs text-green-500">Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}