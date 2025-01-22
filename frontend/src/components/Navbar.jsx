import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <header className="h-20 max-w-6xl max-auto flex flex-wrap items-center justify-center p-4">
      <div className="flex items-center gap-10 z-50">
        <Link to="/" className="text-2xl font-bold text-white">
          <img src="/netflix-logo.png" alt="Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Navbar Item  */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link to="/" className="hover:underline">
            Movies
          </Link>
          <Link to="/" className="hover:underline">
            TV Shows
          </Link>
          <Link to="/" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to="/search" className="text-white hover:underline">
        <Search/> </Link>
      </div>


      {/* Mobile navbar items  */}
      {isMobileOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to={"/"}
            className="block text-white p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block text-white p-2"
            onClick={toggleMobileMenu}
          >
            TV Shows
          </Link>
          <Link
            to={"/"}
            className="block text-white p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
}
