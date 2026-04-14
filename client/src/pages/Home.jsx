import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/react";

export default function Home() {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Amazing Listings
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          Browse listings, manage bookings, and explore experiences—all in one place.
        </p>

        {/* AUTH ACTIONS */}
        {!user ? (
          <div className="flex gap-4">
            <button
              onClick={openSignIn}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign In / Sign Up
            </button>

            <button
              onClick={() => navigate("/listings")}
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Explore as Guest
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go to Dashboard
            </button>

            <button
              onClick={() => navigate("/listings")}
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Browse Listings
            </button>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Fast Booking</h3>
          <p className="text-gray-600">Book listings instantly with smooth UX.</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Trusted Hosts</h3>
          <p className="text-gray-600">Verified hosts for safe experiences.</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
          <p className="text-gray-600">Safe and reliable checkout system.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-3">
          Start exploring today
        </h2>

        <p className="text-blue-100 mb-6">
          Join thousands of users discovering amazing places.
        </p>

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
          >
            Get Started
          </button>
        ) : (
          <button
            onClick={() => navigate("/listings")}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
          >
            Explore Listings
          </button>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} YourApp
      </footer>
    </div>
  );
}