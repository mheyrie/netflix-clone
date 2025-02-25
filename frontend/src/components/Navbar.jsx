import { LogOut, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const { setContentType } = useContentStore();

  return (
    <header className="h-20 max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4">
      <div className="flex items-center gap-10 z-50">
        <Link to="/" className="text-2xl font-bold text-white">
          <img src="/netflix-logo.png" alt="Logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Navbar Item  */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("tv")}
          >
            TV Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-2 md:gap-6 items-center z-50">
        <Link to="/search" className="text-white hover:underline">
          <Search />{" "}
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className="rounded cursor-pointer h-8"
        />
        <LogOut className="siz-6 cursor-pointer" onClick={logout} />
        <div className="sm:hidden">
          {isMobileOpen ? (<X size={20} onClick={toggleMobileMenu}/>
         ):(<Menu className="cursor-pointer size-6" onClick={toggleMobileMenu} />)}
          
        </div>
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
            to={"/history"}
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
