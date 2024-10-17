import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CondenserTemperatureChart = ({ title, data }) => {
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
      min: 10,
      max: 50,
    },
    series: [
      {
        name: 'Condenser Inlet (°C)',
        data: data.inlet,
        color: '#800080', 
      },
      {
        name: 'Condenser Outlet (°C)',
        data: data.outlet,
        color: '#FF0000', 
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

const CondenserLayout = () => {
  
  const condenserData = {
    inlet: [
      [Date.UTC(2024, 9, 1, 0), 30],
      [Date.UTC(2024, 9, 1, 1), 29],
      [Date.UTC(2024, 9, 1, 2), 28],
      [Date.UTC(2024, 9, 1, 3), 30],
      [Date.UTC(2024, 9, 1, 4), 31],
      
    ],
    outlet: [
      [Date.UTC(2024, 9, 1, 0), 40],
      [Date.UTC(2024, 9, 1, 1), 38],
      [Date.UTC(2024, 9, 1, 2), 37],
      [Date.UTC(2024, 9, 1, 3), 39],
      [Date.UTC(2024, 9, 1, 4), 40],
      
    ],
    lowerLimit: [
      [Date.UTC(2024, 9, 1, 0), 20],
      [Date.UTC(2024, 9, 1, 1), 20],
      [Date.UTC(2024, 9, 1, 2), 20],
      [Date.UTC(2024, 9, 1, 3), 20],
      [Date.UTC(2024, 9, 1, 4), 20],
      
    ],
    upperLimit: [
      [Date.UTC(2024, 9, 1, 0), 40],
      [Date.UTC(2024, 9, 1, 1), 40],
      [Date.UTC(2024, 9, 1, 2), 40],
      [Date.UTC(2024, 9, 1, 3), 40],
      [Date.UTC(2024, 9, 1, 4), 40],
     
    ],
  };

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      {/* Graph */}
      <CondenserTemperatureChart title="Condenser In/Out Temperature" data={condenserData} />
    </div>
  );
};

export default CondenserLayout;
