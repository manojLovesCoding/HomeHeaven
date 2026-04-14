import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ListingDetails() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">
        Azure Coastline Modern Villa
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <Star size={16} /> 4.92 · 128 reviews
        </span>
        <span>Malibu, California, United States</span>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-4 gap-3 h-[400px] mb-6">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          className="col-span-2 row-span-2 w-full h-full object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
          className="w-full h-full object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          className="w-full h-full object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-2">
            Entire villa hosted by Sarah Jenkins
          </h2>
          <p className="text-gray-500 mb-4">
            8 guests · 4 bedrooms · 6 beds · 4.5 baths
          </p>

          <hr className="my-6" />

          {/* Features */}
          <div className="space-y-4">
            <p>🔐 Self check-in</p>
            <p>⭐ Superhost</p>
            <p>📍 Great location</p>
          </div>

          <hr className="my-6" />

          {/* About */}
          <h3 className="font-semibold mb-2">About this space</h3>
          <p className="text-gray-600 text-sm">
            Welcome to the Azure Coastline Villa, a modern masterpiece with
            ocean views and luxury finishes.
          </p>

          <hr className="my-6" />

          {/* Amenities */}
          <h3 className="font-semibold mb-4">What this place offers</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <p>🌊 Ocean view</p>
            <p>📶 Fast Wi-Fi</p>
            <p>🍳 Kitchen</p>
            <p>🚗 Free parking</p>
            <p>📺 Netflix</p>
            <p>❄️ AC</p>
          </div>

          <hr className="my-6" />

          {/* Reviews */}
          <h3 className="font-semibold mb-4">⭐ 4.92 · 128 reviews</h3>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium">Marcus Rivera</p>
              <p className="text-gray-500">
                Absolutely incredible stay. Highly recommend!
              </p>
            </div>

            <div>
              <p className="font-medium">Elena Petrova</p>
              <p className="text-gray-500">
                Clean, modern and perfect location.
              </p>
            </div>
          </div>

          <hr className="my-6" />

          {/* Map */}
          <h3 className="font-semibold mb-2">Where you'll be</h3>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT (Booking Card) */}
        <div>
          <div className="border rounded-2xl p-5 shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold mb-4">
              $450 <span className="text-sm font-normal">/ night</span>
            </h2>

            <div className="border rounded-lg p-3 mb-4 text-sm">
              <p>Check-in: 12/05/2024</p>
              <p>Checkout: 12/10/2024</p>
              <p>Guests: 2</p>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
            >
              Reserve
            </button>

            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>$450 x 5 nights</span>
                <span>$2250</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning fee</span>
                <span>$120</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>$85</span>
              </div>
              <hr />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$2455</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
