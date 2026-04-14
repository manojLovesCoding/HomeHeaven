import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/react";

export default function Header() {
  const { user, isLoaded } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
      
      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-4 text-sm shadow-sm cursor-pointer">
        <span>Anywhere</span>
        <span className="text-gray-300">|</span>
        <span>Any week</span>
        <span className="text-gray-300">|</span>
        <span>Add guests</span>

        <div className="bg-black text-white p-1.5 rounded-full">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 relative">
        <button className="text-sm text-gray-600 hover:text-black transition">
          Become a Host
        </button>

        {/* AUTH */}
        {user ? (
          <div className="relative" ref={dropdownRef}>
            
            {/* Avatar */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 border px-3 py-1.5 rounded-full cursor-pointer hover:shadow transition"
            >
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="avatar"
                  className="w-7 h-7 rounded-full"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-gray-300" />
              )}

              <span className="text-sm font-medium">
                {user.firstName || "User"}
              </span>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg text-sm overflow-hidden z-50">
                
                <button
                  onClick={() => {
                    openUserProfile();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  Profile
                </button>

                <button
                  onClick={async () => {
                    await signOut();
                    setOpen(false);
                    navigate("/");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 transition"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}