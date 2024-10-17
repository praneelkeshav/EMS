import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ApparentPowerChart = () => {
  const chartOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Percentage Of Apparent Power crossing 3900 kVA',
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: '% of Apparent Power crossing 3900 kVA',
      },
      labels: {
        format: '{value}%',
      },
    },
    plotOptions: {
      column: {
        stacking: 'percent',
      },
    },
    series: [
      {
        name: '_3900to4000',
        data: [5, 0, 0, 0, 0, 0, 0, 10, 40, 15, 10, 30, 20, 40, 50],
        color: '#00FF00',
      },
      {
        name: '_4000to4100',
        data: [0, 0, 0, 0, 0, 0, 0, 10, 20, 10, 0, 0, 10, 20, 10],
        color: '#32CD32',
      },
      {
        name: '_4100to4200',
        data: [0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 5, 10, 5],
        color: '#FFD700',
      },
      {
        name: '_4200to4300',
        data: [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 10, 5],
        color: '#FF8C00',
      },
      {
        name: '_4300to4400',
        data: [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 10, 5],
        color: '#8B0000',
      },
    ],
    credits: {
      enabled: false, // Hides the 'Highcharts.com' logo
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ApparentPowerChart;
