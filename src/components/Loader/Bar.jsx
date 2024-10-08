import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

// Initialize the 3D module for Highcharts
Highcharts3D(Highcharts);

const EnergySourceChart = () => {
  const options = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 27,
        beta: 23,
        depth: 70,
        viewDistance: 70,
      },
    },
    title: {
      text: 'Energy Sources',
    },
    xAxis: {
      categories: ['Grid', 'Diesel', 'Wheeled in Solar', 'Rooftop'],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Energy (kWh)',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) || 'gray',
        },
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        depth: 100,
        pointPadding:0.4,
        groupPadding:0.1
      },
    },
    series: [
      {
        name: 'Grid',
        data: [31508],
        color: '#007bff',
      },
      {
        name: 'Diesel',
        data: [8779],
        color: '#A9A9A9',
      },
      {
        name: 'Wheeled in Solar',
        data: [6119],
        color: '#32CD32',
      },
      {
        name: 'Rooftop',
        data: [1984],
        color: '#8B4513',
      },
    ],
    credits: {
      enabled: false, // Disable credits (watermark)
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EnergySourceChart;
