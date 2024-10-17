import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const EnergyCycleChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date('2024-07-26'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const options = {
    chart: {
      type: 'area',
      height: 400,
    },
    title: {
      text: 'Daily Energy cycle v/s SoC',
      style: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
    xAxis: {
      categories: [
        '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00', '02:15',
        
      ],
    },
    yAxis: [{
      title: {
        text: 'SoC(%)',
      },
      min: 69,
      max: 73,
    }, {
      title: {
        text: 'Energy (kWh)',
      },
      opposite: true,
    }],
    series: [{
      name: 'Energy(kWh)',
      data: [0.000003, 0.000006, 0.000009, 0.000012, 0.000009, 0.000006, 0.000003],
      type: 'area',
      color: '#ADD8E6', 
      fillOpacity: 0.5,  
    }, {
      name: 'SoC(%)',
      data: [71, 71, 71, 71, 71, 71, 71],
      color: '#FFA500',  
    }],
    credits: {
      enabled: false,  
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <label htmlFor="date" style={{ marginRight: '10px' }}>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            customInput={
              <input
                type="text"
                value={format(selectedDate, 'dd/MM/yyyy')}
                style={{
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  textAlign: 'center',
                  width: '100px',
                }}
              />
            }
          />
        </div>
        <div>
          <h6 style={{ margin: '0', color: '#000000' }}>Current status:</h6>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EnergyCycleChart;
