import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'; // For formatting date

const LTOBatteryChart = () => {
  // State to manage the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const options = {
    chart: {
      type: 'column',
      height: 400,
    },
    title: {
      text: 'LTO Battery IOE BATTERY – (660 kWh)',
      align: 'center',
      style: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '18px',
      },
    },
    subtitle: {
      text: 'LTO Hourly',
      align: 'center',
      style: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '18px',
      },
    },
    xAxis: {
      categories: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
      ],
    },
    yAxis: [{
      min: 0,
      title: {
        text: 'Energy (kWh)',
        style: {
          color: '#000000',
        },
      },
    }, {
      title: {
        text: 'Pack SoC (%)',
        style: {
          color: '#FF0000',
        },
      },
      opposite: true,
      max: 100,
    }],
    series: [{
      name: 'Charging Energy',
      data: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
      stack: 'energy',
      color: '#0000FF', // Blue color for Charging Energy
    }, {
      name: 'Discharging Energy',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      stack: 'energy',
      color: '#FF0000', // Red color for Discharging Energy
    }, {
      name: 'Idle',
      data: [0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005],
      stack: 'energy',
      color: '#FFA500', // Yellow color for Idle
    }, {
      name: 'Pack SoC (%)',
      data: [80, 80, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81],
      type: 'line',
      color: '#FF0000', // Red line for Pack SoC
      yAxis: 1,
      marker: {
        enabled: true,
        symbol: 'circle',
        radius: 3,
        fillColor: '#FF0000',
      },
    }],
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    legend: {
      itemStyle: {
        color: '#000000',  // Black legend text
      },
    },
    credits: {
      enabled: false,  // Disable Highcharts watermark
    },
  };

  return (
    <div>
      {/* Date picker section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: '', fontSize: '16px', marginRight: '10px', color: 'black' }}>Date</span>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
          style={{
            padding: '5px',
            border: '2px solid #000000',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '',
          }}
        />
      </div>
      
      {/* Highcharts component */}
      <HighchartsReact highcharts={Highcharts} options={options} />
      
      {/* Data below the chart */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
          SoC(%) : <span style={{ color: 'black' }}>81</span>
        </p>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
          energy available(kWh): <span style={{ color: 'black' }}>12.15</span>
        </p>
      </div>
    </div>
  );
};

export default LTOBatteryChart;
