import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DieselAnalysis = () => {
  const [date, setDate] = useState('2024-09-27');
  const [scatterData, setScatterData] = useState([]);

  
  useEffect(() => {
    const fetchData = () => {
 
      const data = [
        { name: 'DGNum_1', x: 1, y: 0.5 },
        { name: 'DGNum_2', x: 2, y: 1.0 },
        { name: 'DGNum_3', x: 3, y: 1.5 },
        { name: 'DGNum_4', x: 4, y: 0.8 },
        { name: 'DGNum_5', x: 5, y: 1.2 },

      ];
      setScatterData(data);
    };

    fetchData();
  }, [date]);

  const options = {
    chart: {
      type: 'scatter',
      plotBorderWidth: 1,
      backgroundColor: '#f4f4f4',
    },
    title: {
      text: 'Diesel Energy Analytics (Dot Chart)',
      style: {
        color: '#b33c3c',
        fontSize: '22px',
      },
    },
    xAxis: {
      title: {
        text: 'Diesel Generators',
        style: {
          color: '#333',
        },
      },
      labels: {
        format: '{value}', 
      },
      gridLineWidth: 1,
    },
    yAxis: {
      title: {
        text: 'Energy Consumption (kWh)',
        style: {
          color: '#333',
        },
      },
      gridLineWidth: 1,
    },
    series: [{
      name: 'Energy Consumption',
      data: scatterData,
      marker: {
        radius: 8,
        symbol: 'circle',
      },
      color: '#ff6600',
      tooltip: {
        pointFormat: '{point.name}: {point.y} kWh',
      },
    }],
    legend: {
      enabled: true,
      align: 'center',
      layout: 'horizontal',
      verticalAlign: 'bottom',
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="diesel-analysis-container" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="date" style={{ fontSize: '18px', color: '#b33c3c' }}>
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '5px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default DieselAnalysis;
