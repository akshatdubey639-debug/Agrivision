import { useEffect, useState } from "react";
import api from "../services/Api";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await api.get("/weather/Delhi");

        setWeather(response.data);
      } catch (error) {
        console.error("Weather error:", error);
        setError("Weather data fetch nahi ho paya.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center mt-10 text-xl">
        Loading weather...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-600">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🌦️ Weather
      </h1>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {weather.city}
        </h2>

        <div className="text-center mb-6">
          <p className="text-5xl font-bold text-green-600">
            {weather.temperature}°C
          </p>

          <p className="text-xl text-gray-600 mt-2">
            ☁️ {weather.condition}
          </p>
        </div>

        <div className="space-y-4">

          <div className="flex justify-between bg-blue-50 p-3 rounded-lg">
            <span>💧 Humidity</span>
            <span className="font-bold">
              {weather.humidity}%
            </span>
          </div>

          <div className="flex justify-between bg-green-50 p-3 rounded-lg">
            <span>💨 Wind Speed</span>
            <span className="font-bold">
              {weather.windSpeed} m/s
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Weather;