import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings"; // 👈 add this
import ListingDetails from "./pages/ListingDetails";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <Routes>
      {/* Homepage (no layout) */}
      <Route path="/" element={<Home />} />

      {/* Pages with Sidebar + Header */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}