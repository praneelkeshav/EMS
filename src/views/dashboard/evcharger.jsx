import React from "react";
import ActiveChargerIcon from "./ActiveChargerIcon.svg";
import InactiveChargerIcon from "./InactiveChargerIcon.svg"; // Import SVG files as React components
import "./evcharger.css"; // Link to CSS file for styling

const ChargerDashboard = () => {
  // Sample data for chargers
  const chargers = [
    { location: "Location 1", energy: 20 },
    { location: "Location 2", energy: 0 },
    { location: "Location 3", energy: 50 },
    { location: "Location 4", energy: 50 },
    { location: "Location 5", energy: 90 }
  ];

  return (
    <div className="dashboard">
      {/* Overview */}
      <div className="overview">
        <div className="stat">
          <p>No of chargers used</p>
          <h3>00</h3>
        </div>
        <div className="stat">
          <p>Total Sessions Today</p>
          <h3>00</h3>
        </div>
        <div className="stat">
          <p>Total Energy Used</p>
          <h3>0 kWh</h3>
        </div>
      </div>

      {/* Charger List */}
      <div className="chargers">
        {chargers.map((charger, index) => (
          <div key={index} className="charger-card">
            <div className="charger-icon">
              {charger.energy === 0 ? (
                <img src={InactiveChargerIcon} alt="Inactive Charger" />
              ) : (
                <img src={ActiveChargerIcon} alt="Active Charger" />
              )}
            </div>
            <div className="charger-details">
              <p>{charger.location}</p>
              <p>Energy Consumed: {charger.energy} kWh</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChargerDashboard;
