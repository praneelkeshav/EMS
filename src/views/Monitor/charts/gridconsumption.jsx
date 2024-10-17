import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Table } from 'react-bootstrap';

const GridConsumption = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Automatically update date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB').replace(/\//g, '/');
    setSelectedDate(formattedDate);
  }, []);

  const chartOptions = {
    title: {
      text: 'Grid Consumption(kWh) VS Wheeled In Solar(kWh)',
    },
    xAxis: {
      categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    },
    yAxis: {
      title: {
        text: 'Energy (kWh)',
      },
    },
    series: [
      {
        name: 'Solar Without Trackers (kWh)',
        data: [120, 130, 100, 90, 110, 140, 130, 110, 125, 115],
        color: '#0088FF',
      },
      {
        name: 'Solar With Trackers (kWh)',
        data: [100, 120, 90, 100, 130, 150, 135, 120, 130, 125],
        color: '#0050B3',
      },
      {
        name: 'Grid (kWh)',
        data: [150, 140, 120, 110, 90, 95, 100, 105, 110, 90],
        color: '#32CD32',
      },
      {
        name: 'Wind (kWh)',
        data: [30, 35, 40, 50, 60, 70, 80, 90, 75, 60],
        color: '#FF8C00',
      },
    ],
  };

  return (
    <div>
      <h3 className="text-center"><b>Building Overview</b></h3>
      
      {/* Automatically Updated Date with Styled Box */}
      <div style={styles.dateBox}>
        <h6>Date: {selectedDate}</h6>
      </div>

      {/* Table */}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Grid Energy</th>
            <th>Rooftop Energy</th>
            <th>Wheeledin Energy</th>
            <th>Peak Demand</th>
            <th>Diesel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9275</td>
            <td>1141</td>
            <td>2780</td>
            <td>4330</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>

      {/* Highcharts Line Chart */}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

// CSS styles for the date box
const styles = {
  dateBox: {
    backgroundColor: '#f5f5f5', // Light grey background
    padding: '5px 10px',       // Padding for space inside the box
    borderRadius: '10px',       // Rounded corners
    display: 'inline-block',    // Keep it in a box
    border: '1px solid #ddd',   // Light border for the box
    marginBottom: '10px',       // Spacing between the box and other elements
  },
};

export default GridConsumption;
