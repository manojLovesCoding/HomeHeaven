import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const items = [
  { name: "Dashboard", icon: HomeIcon, path: "/" },
  { name: "My Listings", icon: BuildingOfficeIcon , path: "/listings"},
  { name: "Reservations", icon: CalendarIcon, path: "/reservations" },
  { name: "Earnings", icon: CurrencyDollarIcon, path: "/earnings" },
  { name: "Account Settings", icon: Cog6ToothIcon, path: "/account" },
];

export default function Sidebar() {
  return (
    <div className="w-[250px] bg-white border-r flex flex-col justify-between p-5">
      <div>
        <h1 className="text-[18px] font-semibold text-primary mb-8">
          HavenRentals
        </h1>

        <nav className="space-y-1">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={i}
                to={item.path || "#"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] ${
                    isActive
                      ? "bg-cyan-50 text-primary font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <button className="text-red-500 text-sm">Log out</button>
    </div>
  );
}