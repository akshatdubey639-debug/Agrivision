import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        AgriVision Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DashboardCard
          title="Weather"
          description="Check current weather information for your farm."
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
          title="Crop Health"
          description="Monitor and manage the health of your crops."
          link="/dashboard"
        />

      </div>

    </div>
  );
}

export default Dashboard;