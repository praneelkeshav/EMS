import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const generateRandomData = () => [
  { name: 'Clients', value: Math.floor(Math.random() * 100) + 20, color: '#00CFE8' }, // Blue (Clients)
  { name: 'Chillers', value: Math.floor(Math.random() * 80) + 10, color: '#4F5467' }, // Dark Grey (Chillers)
  { name: 'Common Areas', value: Math.floor(Math.random() * 60) + 10, color: '#F4C22B' }, // Yellow (Common Areas)
  { name: 'EV', value: Math.floor(Math.random() * 50) + 10, color: '#D4C56F' }, // EV
];

const PieDonutChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState(generateRandomData());
  const [activeIndex, setActiveIndex] = useState([0, 1, 2, 3]); // Keeps track of visible data series


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setData(generateRandomData()); // Generate new random data on date change
  };

  const toggleData = (index) => {
    setActiveIndex((prevState) =>
      prevState.includes(index) ? prevState.filter((i) => i !== index) : [...prevState, index]
    );
  };

  const filteredData = data.filter((_, index) => activeIndex.includes(index)); // Filter data based on active series
  const totalConsumption = filteredData.reduce((sum, entry) => sum + entry.value, 0); // Calculate total from visible data

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Date Picker */}
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          style={{ padding: '5px' }}
        />
      </div>

      {/* Renamed to Building Consumption */}
      <h5 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>Building Consumption</h5>

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
              label={({ name, percent, value }) => `${name}: ${(percent * 100).toFixed(0)}% (${value} kWh)`} // Show value on hover
              isAnimationActive={true}
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} kWh`} />
            <Legend
              payload={data.map((entry, index) => ({
                id: index,
                value: entry.name,
                type: 'rect',
                color: entry.color,
              }))}
              onClick={(e) => toggleData(e.id)} // Toggle visibility on legend click
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Centered text for total consumption */}
        <div style={{
          position: 'absolute', top: '45%', left: '50%',
          transform: 'translate(-50%, -50%)', fontWeight: 'bold',
          fontSize: '20px', pointerEvents: 'none'
        }}>
          {totalConsumption} kWh
        </div>
      </div>
    </div>
  );
};

export default PieDonutChart;
