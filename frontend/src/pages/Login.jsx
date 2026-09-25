
import api from "../services/Api";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });
            login(response.data.user, response.data.token)
             navigate("/dashboard");

            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl shadow-lg mb-4">
                        <span className="text-3xl">🌱</span>
                    </div>

                    <h1 className="text-3xl font-bold text-green-800">
                        AgriVision AI
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Smart Farming. Better Future.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">

                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Welcome Back
                    </h2>

                    <p className="text-gray-500 text-center mt-2 mb-6">
                        Login to your farmer account
                    </p>

                    <form onClick={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-200"
                        >
                            Login
                        </button>

                    </form>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{" "}
                        <span className="text-green-600 font-semibold cursor-pointer hover:text-green-700">
                            Create Account
                        </span>
                    </p>

                </div>

                {/* Bottom text */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    © 2026 AgriVision AI • Smart Agriculture Platform
                </p>

            </div>
        </div>
    );
}

export default Login;