import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
            
            {/* AgriVision Logo */}
            <h1 className="text-2xl font-bold">
                🌱 AgriVision
            </h1>

            {/* Navigation Links */}
            <div className="flex gap-6">
                <a href="/" className="hover:text-green-200">
                    Home
                </a>

                <a href="/dashboard" className="hover:text-green-200">
                    Dashboard
                </a>

                <a href="/profile" className="hover:text-green-200">
                    Profile
                </a>
            </div>

        </nav>
    );
};

export default Navbar;