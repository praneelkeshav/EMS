import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const scopeData = [
  { name: 'Scope 1', value: 2, color: '#FF6B6B' }, // Red for Scope 1
  { name: 'Scope 2', value: 5.2, color: '#00CFE8' }, // Light Grey for Scope 2
  { name: 'Scope 3', value: 92.8, color: '#F4C22B' }, // Dark Grey for Scope 3
];

const PieDonutChart = () => {
  const [activeIndex, setActiveIndex] = useState([0, 1, 2]); // Keeps track of visible data series

  const toggleData = (index) => {
    setActiveIndex((prevState) =>
      prevState.includes(index) ? prevState.filter((i) => i !== index) : [...prevState, index]
    );
  };

  const filteredData = scopeData.filter((_, index) => activeIndex.includes(index)); // Filter data based on active series
  const totalEmissions = filteredData.reduce((sum, entry) => sum + entry.value, 0); // Calculate total from visible data

  return (
    <div style={{ textAlign: 'center' }}>
      <h5 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>Scope Emissions Breakdown</h5>

      {/* Donut Chart with Responsive Container */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <ResponsiveContainer width={500} height={300}>
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent, value }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              isAnimationActive={true}
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend
              payload={scopeData.map((entry, index) => ({
                id: index,
                value: entry.name,
                type: 'rect',
                color: entry.color,
              }))}
              onClick={(e) => toggleData(e.id)} // Toggle visibility on legend click
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Centered text for total emissions */}
        <div style={{
          position: 'absolute', top: '45%', left: '50%',
          transform: 'translate(-50%, -50%)', fontWeight: 'bold',
          fontSize: '20px', pointerEvents: 'none'
        }}>
          {totalEmissions}%
        </div>
      </div>
    </div>
  );
};

export default PieDonutChart;
