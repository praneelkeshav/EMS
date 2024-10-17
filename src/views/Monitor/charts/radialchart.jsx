import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

// Initialize Highcharts More (for advanced chart types like radial/bar)
if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
}

const ElectricalEnergyChart = ({ data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y} kWh',
        },
      },
    },
    series: [
      {
        name: 'Electrical Energy',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const ElectricalEnergyLayout = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Get current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Pad month with '0'
    const day = today.getDate().toString().padStart(2, '0'); // Pad day with '0'
    return `${year}-${month}-${day}`;
  };

  // Set the default date to today's date when the component mounts
  useEffect(() => {
    setSelectedDate(getCurrentDate());
  }, []);

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Sample data for the radial chart
  const energyData = [
    { name: 'Chillers', y: 70, color: '#00aaff' },
    { name: 'Cooling Tower', y: 15, color: '#ff6600' },
    { name: 'Condenser Pump', y: 10, color: '#ff3333' },
    { name: 'Secondary Pump', y: 5, color: '#800080' },
    { name: 'Primary Pump', y: 3, color: '#0000ff' },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Heading */}
      <h4 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Electrical Energy (kWh)</h4>
      
      {/* Date Picker */}
      <div style={{ marginBottom: '20px' , textAlign: 'left'}}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            marginRight: '20px',
          }}
        />
      </div>

      {/* Radial Chart */}
      <ElectricalEnergyChart data={energyData} />

      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ElectricalEnergyLayout;
