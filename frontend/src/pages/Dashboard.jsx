import DashboardCard from "../components/DashboardCard";
import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import AuthContext from "../context/AuthContext";


function Dashboard() {

  const { token } = useContext(AuthContext);

  const [farm, setFarm] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
  const fetchFarm = async () => {
    try {
      const response = await api.get("/farm/getfarm", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFarm(response.data.farm);

      console.log("Dashboard Farm:", response.data.farm);
    } catch (error) {
      console.log("Dashboard Farm Error:", error);
    }
  };

  if (token) {
    fetchFarm();
  }
}, [token]);

useEffect(() => {
  const fetchWeather = async () => {
    if (!farm?.district) return;

    try {
      const response = await api.get(
        `/weather/${farm.district}`
      );

      setWeather(response.data);

      console.log("Dashboard Weather:", response.data);
    } catch (error) {
      console.log("Dashboard Weather Error:", error);
    }
  };

  fetchWeather();
}, [farm]);
  
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        AgriVision Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
       description={
         weather ? (
           <>
         <span className="text-2xl font-bold text-gray-800">
            {weather.temperature}°C
          </span>

          <br />

          <span>
            {weather.condition}
          </span>

          <br />

          <span>
            Humidity: {weather.humidity}%
          </span>
        </>
    ) : (
      "Loading weather..."
    )
  }
  link="/weather"
/>
       

        <DashboardCard
          title="Disease Detection"
          description="Upload a crop image to detect possible diseases."
          link="/disease"
        />

        <DashboardCard
          title="Mandi Prices"
          description="Check the latest crop and market prices."
          link="/mandi"
        />

        <DashboardCard
          title="Farm Health"
          description="Monitor and manage the health of your crops."
          link="/dashboard"
        />

      </div>

    </div>
  );
}

export default Dashboard;