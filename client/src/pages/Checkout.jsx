import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 mb-4"
      >
        ← Back to listing
      </button>

      <h1 className="text-2xl font-semibold mb-6">Confirm and pay</h1>

      <div className="grid grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div className="col-span-2 space-y-8">
          
          {/* Trip */}
          <div>
            <h2 className="font-semibold mb-4">Your trip</h2>

            <div className="flex justify-between mb-3">
              <div>
                <p className="font-medium">Dates</p>
                <p className="text-gray-500 text-sm">
                  Oct 24 – Oct 29, 2024
                </p>
              </div>
              <button className="text-sm text-blue-500">Edit</button>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">Guests</p>
                <p className="text-gray-500 text-sm">2 guests</p>
              </div>
              <button className="text-sm text-blue-500">Edit</button>
            </div>
          </div>

          <hr />

          {/* Guest Info */}
          <div>
            <h2 className="font-semibold mb-2">Guest Information</h2>
            <p className="text-gray-500 text-sm mb-4">
              Let the host know who's coming
            </p>

            <div className="border rounded-xl p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="border rounded-lg p-2"
                  placeholder="Adults"
                  defaultValue={2}
                />
                <input
                  className="border rounded-lg p-2"
                  placeholder="Children"
                  defaultValue={0}
                />
              </div>

              <textarea
                className="border rounded-lg p-3 w-full"
                rows={3}
                placeholder="Message the host (optional)"
              />
            </div>
          </div>

          <hr />

          {/* Payment */}
          <div>
            <h2 className="font-semibold mb-4">Choose how to pay</h2>

            <div className="border rounded-xl overflow-hidden">
              
              {/* Card */}
              <div className="p-4 border-b">
                <label className="flex items-center gap-2 mb-3">
                  <input type="radio" defaultChecked />
                  Credit or debit card
                </label>

                <input
                  className="border rounded-lg p-2 w-full mb-3"
                  placeholder="Card number"
                />

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    className="border rounded-lg p-2"
                    placeholder="MM / YY"
                  />
                  <input
                    className="border rounded-lg p-2"
                    placeholder="CVV"
                  />
                </div>

                <input
                  className="border rounded-lg p-2 w-full"
                  placeholder="ZIP code"
                />
              </div>

              {/* PayPal */}
              <div className="p-4">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  PayPal
                </label>
              </div>

            </div>
          </div>

          <hr />

          {/* Policies */}
          <div>
            <h2 className="font-semibold mb-4">Required for your trip</h2>

            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <strong>Cancellation policy:</strong> Free cancellation before Oct 17.
              </p>
              <p>
                <strong>Ground rules:</strong> Respect the property and neighbors.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div>
          <div className="border rounded-2xl p-5 shadow-sm sticky top-6">
            
            {/* Property */}
            <div className="flex gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="font-medium text-sm">
                  Eco-Friendly Modern Cabin
                </p>
                <p className="text-gray-500 text-xs">
                  Blue Ridge, Georgia
                </p>
                <p className="text-xs">⭐ 4.92</p>
              </div>
            </div>

            <hr className="mb-4" />

            {/* Price */}
            <div className="text-sm space-y-2 mb-4">
              <div className="flex justify-between">
                <span>$245 x 5 nights</span>
                <span>$1225</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning fee</span>
                <span>$120</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>$185</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>$98</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$1628</span>
              </div>
            </div>

            {/* Coupon */}
            <div className="flex gap-2 mb-4">
              <input
                className="border rounded-lg p-2 flex-1 text-sm"
                placeholder="Promo code"
              />
              <button className="border px-3 rounded-lg text-sm">
                Apply
              </button>
            </div>

            {/* CTA */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Confirm and Pay
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              You won't be charged yet
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}