import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: '3700 to 3800 kVA',
        data: [0, 0, 0, 0, 0, 0, 0, 20, 25, 30, 35, 40],
        backgroundColor: '#00FF00',
      },
      {
        label: '3800 to 3900 kVA',
        data: [0, 0, 0, 0, 0, 0, 0, 15, 20, 25, 30, 35],
        backgroundColor: '#FFFF00',
      },
      {
        label: '3900 to 4000 kVA',
        data: [0, 0, 0, 0, 0, 0, 0, 10, 15, 20, 25, 30],
        backgroundColor: '#FFA500',
      },
      {
        label: '4000 to 4100 kVA',
        data: [0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 25],
        backgroundColor: '#FF4500',
      },
      {
        label: '4100 to 4200 kVA',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20],
        backgroundColor: '#FF0000',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time (Hours)',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
