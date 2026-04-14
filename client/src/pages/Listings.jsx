import ListingCard from "../components/ListingCard";

const listings = new Array(12).fill({
  title: "Blue Ridge, Georgia",
  distance: "128 miles away",
  dates: "Dec 15 - 20",
  price: "$245 night",
  rating: "4.92",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
});

export default function Listings() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      
      {/* Top Filters */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex gap-6 text-sm text-gray-600">
          <span className="font-medium text-black">Cabins</span>
          <span>Beachfront</span>
          <span>Trending</span>
          <span>Countryside</span>
          <span>Tiny Homes</span>
        </div>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-xl text-sm">
            Filters
          </button>
          <button className="border px-4 py-2 rounded-xl text-sm">
            Display total before taxes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        
        {/* LEFT GRID */}
        <div className="w-[65%] p-6 grid grid-cols-3 gap-6">
          {listings.map((item, i) => (
            <ListingCard key={i} data={item} />
          ))}
        </div>

        {/* RIGHT MAP */}
        <div className="w-[35%] p-6">
          <div className="sticky top-6 h-[80vh] rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Price Pins */}
            {["$195", "$245", "$290", "$380", "$520", "$175"].map(
              (price, i) => (
                <div
                  key={i}
                  className="absolute bg-white px-3 py-1 rounded-full text-sm shadow"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${30 + (i % 2) * 20}%`,
                  }}
                >
                  {price}
                </div>
              )
            )}

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow">
              Show Map
            </button>
          </div>
        </div>

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 py-10">
        <button className="w-8 h-8 rounded-full border">{"<"}</button>
        <button className="w-8 h-8 rounded-full bg-blue-500 text-white">
          1
        </button>
        <button className="w-8 h-8 rounded-full border">2</button>
        <button className="w-8 h-8 rounded-full border">3</button>
        <span>...</span>
        <button className="w-8 h-8 rounded-full border">15</button>
        <button className="w-8 h-8 rounded-full border">{">"}</button>
      </div>
    </div>
  );
}