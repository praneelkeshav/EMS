import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const data = [
  { time: '00:00', voltage: 405, current: 0.35 },
  { time: '01:40', voltage: 405, current: 0.38 },
  { time: '03:20', voltage: 405, current: 0.36 },
  { time: '05:00', voltage: 405, current: 0.35 },
  { time: '06:40', voltage: 404.8, current: 0.33 },
  { time: '08:20', voltage: 404.7, current: 0.32 },
  { time: '10:00', voltage: 404.5, current: 0.30 },
];

const VoltAreaChart = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h5 style={{ color: '#000000', marginBottom: '10px' }}><b>Voltage v/s Current</b></h5>
      <ResponsiveContainer width="95%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            yAxisId="left"
            orientation="left"
            domain={[403.8, 405.3]}
            tickCount={6}
            label={{ value: 'Voltage (V)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 0.4]}
            label={{ value: 'Current (A)', angle: -90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="voltage"
            stroke="#ff7300"
            fillOpacity={0.1}
            fill="#ff7300"
            name="Voltage (V)"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="current"
            stroke="#00bfff"
            fillOpacity={0.2}
            fill="#00bfff"
            name="Current (A)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VoltAreaChart;
