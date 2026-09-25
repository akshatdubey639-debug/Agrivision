
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Disease from "./pages/Disease";
import Weather from "./pages/Weather";
import Mandi from "./pages/Mandi";
import Profile from "./pages/Profile"
import Login from "./pages/Login";
import Register from "./pages/register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/disease" element={<Disease />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/mandi" element={<Mandi />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
  );
}

export default App;