import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { year: '2017', scope1: 140.38, scope2: 80, scope3: 90 },
  { year: '2018', scope1: 235.77, scope2: 80, scope3: 1271.343 },
  { year: '2019', scope1: 105.02, scope2: 20, scope3: 1888.203 },
  { year: '2020', scope1: 141.49, scope2: 90.371, scope3: 2542.381 },
  { year: '2021', scope1: 105.14, scope2: 124.66, scope3: 1665.379 },
];

const COLORS = {
  scope1: '#FF6B6B', // Color for Scope 1
  scope2: '#00CFE8', // Color for Scope 2
  scope3: '#F4C22B', // Color for Scope 3
};

const EmissionsBarChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h5 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>Emissions per Scope and Year (kg CO₂-eq)</h5>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => value.toLocaleString()} />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
          
          {/* Bars for Scope 1, 2, and 3 with Labels */}
          <Bar dataKey="scope1" fill={COLORS.scope1} name="Scope 1">
            <LabelList dataKey="scope1" position="top" formatter={(value) => value.toLocaleString()} />
          </Bar>
          <Bar dataKey="scope2" fill={COLORS.scope2} name="Scope 2">
            <LabelList dataKey="scope2" position="top" formatter={(value) => value.toLocaleString()} />
          </Bar>
          <Bar dataKey="scope3" fill={COLORS.scope3} name="Scope 3">
            <LabelList dataKey="scope3" position="top" formatter={(value) => value.toLocaleString()} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsBarChart;
