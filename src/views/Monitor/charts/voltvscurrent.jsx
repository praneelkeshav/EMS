import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const VoltVsCurrentChart = () => {
  const options = {
    chart: {
      height: 400,
      backgroundColor: null,  // No background color, keeping it transparent or default
    },
    title: {
      text: 'Voltage v/s Current',
      style: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
    xAxis: {
      categories: [
        '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00', '02:15',
        // Add all the time intervals needed
      ],
    },
    yAxis: [{
      title: {
        text: 'Current(A)',
        style: {
          color: '#000000',
        },
      },
      min: 0,
      max: 0.32,
    }, {
      title: {
        text: 'Voltage(V)',
        style: {
          color: '#FFA500',
        },
      },
      opposite: true,
      min: 0,
      max: 0.24,
    }],
    series: [{
      name: 'Current(A)',
      data: [0.24, 0.30, 0.28, 0.32, 0.30, 0.28, 0.24],
      type: 'area',
      color: '#000000',  // Black area chart for Current
      fillOpacity: 1,
      marker: {
        enabled: false,
      },
    }, {
      name: 'Voltage(V)',
      data: [0.08, 0.15, 0.12, 0.18, 0.15, 0.12, 0.08],
      type: 'line',
      color: '#FFA500',  // Yellow line chart for Voltage
      lineWidth: 2,
      marker: {
        enabled: true,
        radius: 3,
        fillColor: '#FFA500',
      },
    }],
    plotOptions: {
      area: {
        fillColor: '#000000',  // Fill the Current area with black
        lineWidth: 2,
      },
      line: {
        lineWidth: 2,
      },
    },
    legend: {
      itemStyle: {
        color: '#000000',  // Legend items in black
      },
    },
    credits: {
      enabled: false,  // Disable Highcharts watermark
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default VoltVsCurrentChart;
