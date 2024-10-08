import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Clients', value: 100, color: '#00CFE8' }, // Blue (Clients)
  { name: 'Chillers', value: 80, color: '#4F5467' }, // Dark Grey (Chillers)
  { name: 'Common Areas', value: 60, color: '#F4C22B' } // Yellow (Common Areas)
];

const PieDonutChart = () => {
  const [selectedDate] = useState(new Date().toLocaleDateString()); // Current date
  const totalConsumption = 240; // Total kWh

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Date Dropdown moved to the right */}
      <div style={{ textAlign: 'top', marginBottom: '10px' }}>
        <select value={selectedDate} disabled style={{ padding: '5px' }}>
          <option value={selectedDate}>{selectedDate}</option>
        </select>
      </div>

      {/* Renamed to Building Consumption */}
      <h5 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>Building Consumption</h5>

      {/* Re Donut Chart */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150} // Center X of the chart
            cy={150} // Center Y of the chart
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`} // Display percentages
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        {/* Centered text for total consumption */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold', fontSize: '20px' }}>
          {totalConsumption} kWh
        </div>
      </div>
    </div>
  );
};

export default PieDonutChart;
