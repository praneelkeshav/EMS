import React from 'react';
import { ResponsiveContainer, Tooltip, Cell, XAxis, YAxis, CartesianGrid, Legend, Bar, BarChart } from 'recharts';

const data = [
  { city: 'Mumbai', Scope2: 500, Scope3: 1200 },
  { city: 'Delhi', Scope2: 300, Scope3: 800 },
  { city: 'Bnr', Scope2: 200, Scope3: 1000 },
  { city: 'Chennai', Scope2: 400, Scope3: 600 },
  { city: 'Hyd', Scope2: 300, Scope3: 900 },
];

// Color based on value
const getColor = (value) => {
  if (value > 1000) return "#D32F2F"; // High emissions
  if (value > 500) return "#FFA726";  // Medium emissions
  return "#81C784";                   // Low emissions
};

const HeatMapBarChart = () => (
  <div style={{ textAlign: 'center' }}>
    <h5 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>
      Emissions Heat Map by Scope and City (kg CO₂-eq)
    </h5>
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={data} layout="vertical" barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="city" />
        <Tooltip formatter={(value) => `${value} kg CO₂-eq`} />
        <Legend />
        <Bar dataKey="Scope2" name="Scope 2">
          {data.map((entry, index) => (
            <Cell key={`cell-scope2-${index}`} fill={getColor(entry.Scope2)} />
          ))}
        </Bar>
        <Bar dataKey="Scope3" name="Scope 3">
          {data.map((entry, index) => (
            <Cell key={`cell-scope3-${index}`} fill={getColor(entry.Scope3)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HeatMapBarChart;
