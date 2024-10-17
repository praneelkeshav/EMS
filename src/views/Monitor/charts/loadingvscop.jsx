import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LoadingVsCop = () => {
  // Sample data for chillers with timestamps
  const data = {
    'Chiller 1': {
      loading: [
        [Date.UTC(2024, 9, 1, 0), 10],
        [Date.UTC(2024, 9, 1, 1), 30],
        [Date.UTC(2024, 9, 1, 2), 40],
        [Date.UTC(2024, 9, 1, 3), 80],
        [Date.UTC(2024, 9, 1, 4), 70],
        [Date.UTC(2024, 9, 1, 5), 60],
        [Date.UTC(2024, 9, 1, 6), 50],
        [Date.UTC(2024, 9, 1, 7), 90],
        [Date.UTC(2024, 9, 1, 8), 100],
      ],
      cop: [
        [Date.UTC(2024, 9, 1, 0), 2],
        [Date.UTC(2024, 9, 1, 1), 3],
        [Date.UTC(2024, 9, 1, 2), 3.5],
        [Date.UTC(2024, 9, 1, 3), 5],
        [Date.UTC(2024, 9, 1, 4), 4.5],
        [Date.UTC(2024, 9, 1, 5), 5.5],
        [Date.UTC(2024, 9, 1, 6), 6],
        [Date.UTC(2024, 9, 1, 7), 7],
        [Date.UTC(2024, 9, 1, 8), 8],
      ],
    },
    'Chiller 2': {
      loading: [
        [Date.UTC(2024, 9, 1, 0), 20],
        [Date.UTC(2024, 9, 1, 1), 50],
        [Date.UTC(2024, 9, 1, 2), 60],
        [Date.UTC(2024, 9, 1, 3), 70],
        [Date.UTC(2024, 9, 1, 4), 80],
        [Date.UTC(2024, 9, 1, 5), 30],
        [Date.UTC(2024, 9, 1, 6), 40],
        [Date.UTC(2024, 9, 1, 7), 50],
        [Date.UTC(2024, 9, 1, 8), 60],
      ],
      cop: [
        [Date.UTC(2024, 9, 1, 0), 2.5],
        [Date.UTC(2024, 9, 1, 1), 3.5],
        [Date.UTC(2024, 9, 1, 2), 4],
        [Date.UTC(2024, 9, 1, 3), 5.5],
        [Date.UTC(2024, 9, 1, 4), 4],
        [Date.UTC(2024, 9, 1, 5), 4.5],
        [Date.UTC(2024, 9, 1, 6), 5],
        [Date.UTC(2024, 9, 1, 7), 6],
        [Date.UTC(2024, 9, 1, 8), 6.5],
      ],
    },
    // Add similar data for other chillers
  };

  const [selectedChiller, setSelectedChiller] = useState('Chiller 1');

  const options = {
    chart: {
      type: 'line',
      height: '300px',
    },
    title: {
      text: 'Loading % vs COP (Time Series)',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Time',
      },
    },
    yAxis: [
      {
        title: {
          text: 'Loading (%)',
        },
        min: 0,
      },
      {
        title: {
          text: 'COP',
        },
        opposite: true, // Position the second y-axis on the opposite side
        min: 0,
      },
    ],
    series: [
      {
        name: `${selectedChiller} Loading (%)`,
        data: data[selectedChiller].loading,
        yAxis: 0,
      },
      {
        name: `${selectedChiller} COP`,
        data: data[selectedChiller].cop,
        yAxis: 1,
      },
    ],
    tooltip: {
      shared: true,
      crosshairs: true,
      xDateFormat: '%H:%M', // Format the time in the tooltip
    },
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label>Select Chiller:</label>
        <select
          value={selectedChiller}
          onChange={(e) => setSelectedChiller(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          {Object.keys(data).map((chiller) => (
            <option key={chiller} value={chiller}>
              {chiller}
            </option>
          ))}
        </select>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const LoadingVsCopLayout = () => {
  return (
    <div className="container">
      {/* Chart Section */}
      <div className="chart-section" style={{ marginTop: '20px', padding: '0 20px' }}>
        <LoadingVsCop />
      </div>
    </div>
  );
};

export default LoadingVsCopLayout;
