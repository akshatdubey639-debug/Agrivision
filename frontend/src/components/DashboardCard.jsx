import React from "react";

const DashboardCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      
      <h2 className="text-xl font-bold text-green-700 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        View Details
      </button>

    </div>
  );
};

export default DashboardCard;