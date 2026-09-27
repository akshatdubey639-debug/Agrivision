import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-600 text-white px-4 py-4">

      <div className="flex items-center justify-between">

        {/* AgriVision Logo */}
        <Link to="/" className="text-2xl font-bold">
          🌱 AgriVision
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-wrap gap-4 items-center">

          <Link to="/" className="hover:text-green-200">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-green-200">
            Dashboard
          </Link>

          <Link to="/disease" className="hover:text-green-200">
            Disease
          </Link>

          <Link to="/weather" className="hover:text-green-200">
            Weather
          </Link>

          <Link to="/mandi" className="hover:text-green-200">
            Mandi
          </Link>

          <Link to="/profile" className="hover:text-green-200">
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="hover:text-green-200"
          >
            Logout
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 mt-4">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Dashboard
          </Link>

          <Link
            to="/disease"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Disease
          </Link>

          <Link
            to="/weather"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Weather
          </Link>

          <Link
            to="/mandi"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Mandi
          </Link>

          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-200"
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="text-left hover:text-green-200"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;