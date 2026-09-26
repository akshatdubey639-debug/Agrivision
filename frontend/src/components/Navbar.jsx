
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* AgriVision Logo */}
      <Link to="/" className="text-2xl font-bold">
        🌱 AgriVision
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4">

        <Link to="/" className="hover:text-green-200">
          Home
        </Link>

        <Link to="/dashboard" className="hover:text-green-200">
          Dashboard
        </Link>

        <Link to="/profile" className="hover:text-green-200">
          Profile
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;