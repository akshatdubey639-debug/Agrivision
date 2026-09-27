import { Link, NavLink, useNavigate } from "react-router-dom";
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

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-200 font-bold"
      : "hover:text-green-200";

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

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/disease" className={navLinkClass}>
            Disease
          </NavLink>

          <NavLink to="/weather" className={navLinkClass}>
            Weather
          </NavLink>

          <NavLink to="/mandi" className={navLinkClass}>
            Mandi
          </NavLink>

          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>

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

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/disease"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Disease
          </NavLink>

          <NavLink
            to="/weather"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Weather
          </NavLink>

          <NavLink
            to="/mandi"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Mandi
          </NavLink>

          <NavLink
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Profile
          </NavLink>

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