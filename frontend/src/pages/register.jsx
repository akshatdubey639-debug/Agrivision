import { useState } from "react";
import api from "../services/Api";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        const response = await api.post("/auth/register", {
            username,
            email,
            phone,
            password
        });

        console.log(response.data);

        alert("Registration successful");
        navigate("/login");

    } catch (error) {
        console.log(error);

        alert(
            error.response?.data?.message ||
            "Registration failed"
        );
    }

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md">

                {/* Brand */}
                <div className="text-center mb-6">

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl shadow-lg mb-3">
                        <span className="text-3xl">🌱</span>
                    </div>

                    <h1 className="text-3xl font-bold text-green-800">
                        AgriVision AI
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Join the future of smart farming
                    </p>

                </div>

                {/* Register Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">

                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Create Account
                    </h2>

                    <p className="text-gray-500 text-center mt-2 mb-6">
                        Register as a farmer
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-200"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{" "}
                        <span className="text-green-600 font-semibold cursor-pointer hover:text-green-700">
                            Login
                        </span>
                    </p>

                </div>

                <p className="text-center text-xs text-gray-400 mt-5">
                    © 2026 AgriVision AI • Smart Agriculture Platform
                </p>

            </div>

        </div>
    );
}

export default Register;