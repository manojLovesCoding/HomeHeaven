import { useNavigate } from "react-router-dom";

export default function ListingCard({ data, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/listing/${id || 1}`)}
    >
      {/* Image */}
      <div className="relative group">
        <img
          src={data.image}
          alt=""
          className="w-full h-[220px] object-cover rounded-xl transition duration-300 group-hover:scale-[1.02]"
        />

        {/* Wishlist */}
        <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-sm">
          🤍
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 text-sm">
        <div className="flex justify-between font-medium">
          <span className="truncate">{data.title}</span>
          <span className="flex items-center gap-1">
            ⭐ {data.rating}
          </span>
        </div>

        <p className="text-gray-500">{data.distance}</p>
        <p className="text-gray-500">{data.dates}</p>

        <p className="mt-1 font-medium">
          {data.price} <span className="font-normal text-gray-500">/ night</span>
        </p>
      </div>
    </div>
  );
}