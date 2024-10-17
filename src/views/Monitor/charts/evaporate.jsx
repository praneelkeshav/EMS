import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EvaporatorTemperatureChart = ({ title, data }) => {
  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: title,
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        hour: '%H:%M',
      },
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)',
      },
      min: 0,
    },
    series: [
      {
        name: 'Evaporator Inlet (°C)',
        data: data.inlet,
        color: '#00bfff',
      },
      {
        name: 'Evaporator Outlet (°C)',
        data: data.outlet,
        color: '#000080',
      },
      {
        name: 'Lower Limit',
        data: data.lowerLimit,
        dashStyle: 'ShortDash',
        color: '#FFA500',
      },
      {
        name: 'Upper Limit',
        data: data.upperLimit,
        dashStyle: 'ShortDash',
        color: '#FF0000',
      },
    ],
    tooltip: {
      xDateFormat: '%H:%M',
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const EvaporatorLayout = () => {
  // Sample data with Date.UTC for time on x-axis
  const evaporatorData = {
    inlet: [
      [Date.UTC(2024, 9, 1, 0), 5],
      [Date.UTC(2024, 9, 1, 1), 6],
      [Date.UTC(2024, 9, 1, 2), 7],
      // Add more data points
    ],
    outlet: [
      [Date.UTC(2024, 9, 1, 0), 4],
      [Date.UTC(2024, 9, 1, 1), 4.5],
      [Date.UTC(2024, 9, 1, 2), 5],
      // Add more data points
    ],
    lowerLimit: [
      [Date.UTC(2024, 9, 1, 0), 5],
      [Date.UTC(2024, 9, 1, 1), 5],
      [Date.UTC(2024, 9, 1, 2), 5],
      // Add more data points
    ],
    upperLimit: [
      [Date.UTC(2024, 9, 1, 0), 20],
      [Date.UTC(2024, 9, 1, 1), 20],
      [Date.UTC(2024, 9, 1, 2), 20],
      // Add more data points
    ],
  };

  return (
    <div className="container">
      {/* Single Chart */}
      <EvaporatorTemperatureChart title="Evaporator In/Out Temperature" data={evaporatorData} />
    </div>
  );
};

export default EvaporatorLayout;
