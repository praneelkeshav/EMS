import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { ButtonGroup, Button } from 'react-bootstrap'; // Import Bootstrap components

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const VoltLineChart = () => {
  const [selectedString, setSelectedString] = useState("All Strings");

  // Generate random data function
  const generateRandomData = (baseValue) => {
    return Array.from({ length: 12 }, () => baseValue + Math.random() * 10 - 5);
  };

  // Random data for each string
  const randomData = {
    "String 1": { voltage: generateRandomData(470), current: generateRandomData(100) },
    "String 2": { voltage: generateRandomData(565), current: generateRandomData(200) },
    "String 3": { voltage: generateRandomData(375), current: generateRandomData(50) },
    "String 4": { voltage: generateRandomData(660), current: generateRandomData(105) },
    "String 5": { voltage: generateRandomData(780), current: generateRandomData(350) },
    "All Strings": { voltage: generateRandomData(670), current: generateRandomData(205) }
  };

  // Data for the chart
  const data = {
    labels: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
    datasets: [
      {
        label: "Voltage (V)",
        data: randomData[selectedString].voltage,
        borderColor: "#6abaaf",
        backgroundColor: "rgba(106, 186, 175, 0.5)", // Area fill color for voltage
        borderWidth: 2,
        fill: true, // Enable area fill
        tension: 0.3, // For smooth curves
        pointRadius: 3
      },
      {
        label: "Current (A)",
        data: randomData[selectedString].current,
        backgroundColor: "rgba(255, 206, 86, 0.5)", // Area fill color for current
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 2,
        fill: true, // Enable area fill
        tension: 0.3, // For smooth curves
        pointRadius: 3
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fit well in its container
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position:"bottom"

      },
      tooltip: {
        mode: "index",
        intersect: false
      }
    }
  };

  return (
    <div style={{ textAlign: "left", padding: "20px" }}>
      <h5 style={{ textAlign:"center",marginBottom:"20px" }}><b>Voltage v/s Current</b></h5>

      {/* String Selection Buttons using Bootstrap ButtonGroup */}
      <ButtonGroup className="mb-4">
        <Button
          variant={selectedString === "String 1" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("String 1")}
        >
          String 1
        </Button>
        <Button
          variant={selectedString === "String 2" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("String 2")}
        >
          String 2
        </Button>
        <Button
          variant={selectedString === "String 3" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("String 3")}
        >
          String 3
        </Button>
        <Button
          variant={selectedString === "String 4" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("String 4")}
        >
          String 4
        </Button>
        <Button
          variant={selectedString === "String 5" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("String 5")}
        >
          String 5
        </Button>
        <Button
          variant={selectedString === "All Strings" ? "primary" : "outline-primary"}
          onClick={() => setSelectedString("All Strings")}
        >
          All Strings
        </Button>
      </ButtonGroup>

      {/* Chart Container */}
      <div style={{ width: "80%", margin: "0 auto", height: "400px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default VoltLineChart;
