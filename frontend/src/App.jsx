
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Disease from "./pages/Disease";
import Weather from "./pages/Weather";
import Mandi from "./pages/Mandi";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/mandi" element={<Mandi />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;