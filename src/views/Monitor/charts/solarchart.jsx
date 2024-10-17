import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const SolarChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date

    // Solar data options for the chart
    const [solarDataOptions, setSolarDataOptions] = useState({
        title: {
            text: 'Daily Solar data',
            style: {
                fontWeight: 'bold',
                color: 'black'
            }
        },
        xAxis: {
            categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '11:00']
        },
        yAxis: [{
            title: {
                text: 'Energy (kWh)',
            }
        }, {
            title: {
                text: 'Irradiation (kWh/m2)',
                opposite: true
            }
        }],
        series: [{
            name: 'Energy(kWh)',
            data: [0, 200, 600, 1000, 1500, 1600, 1200],
            type: 'line',
            color: '#007bff'
        }, {
            name: 'Irradiation (kWh/m2)',
            data: [0, 0.1, 0.3, 0.6, 0.7, 0.8, 0.5],
            type: 'line',
            yAxis: 1,
            color: '#00bcd4'
        }]
    });

    // Inverter data options for the chart
    const [inverterDataOptions, setInverterDataOptions] = useState({
        title: {
            text: 'Inverter Active Power',
            style: {
                fontWeight: 'bold',
                color: 'black'
            }
        },
        xAxis: {
            categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '11:00']
        },
        yAxis: {
            title: {
                text: 'Energy (kWh)',
            }
        },
        series: [
            { name: 'Inverter1', data: [0, 500, 2000, 5000, 7500, 10000, 12000], type: 'line' },
            { name: 'Inverter2', data: [0, 480, 1980, 4900, 7400, 9800, 11800], type: 'line' },
            { name: 'Inverter3', data: [0, 470, 1950, 4800, 7300, 9600, 11600], type: 'line' },
            { name: 'Inverter4', data: [0, 460, 1930, 4700, 7200, 9400, 11400], type: 'line' },
            { name: 'Inverter5', data: [0, 450, 1900, 4600, 7100, 9200, 11200], type: 'line' },
            { name: 'Inverter6', data: [0, 440, 1870, 4500, 7000, 9000, 11000], type: 'line' },
            { name: 'Inverter7', data: [0, 430, 1850, 4400, 6900, 8800, 10800], type: 'line' },
            { name: 'Inverter8', data: [0, 420, 1830, 4300, 6800, 8600, 10600], type: 'line' }
        ]
    });

    // Update the chart data when the date is changed
    useEffect(() => {
        const fetchDataForDate = (date) => {
            const formattedDate = format(date, 'yyyy-MM-dd');
            console.log(`Fetching data for: ${formattedDate}`);

            // Simulate new data fetch for the selected date
            const newSolarData = solarDataOptions.series.map(series => {
                const randomData = series.data.map(() => Math.random() * 1600); // Random data between 0 and 1600
                return { ...series, data: randomData };
            });

            const newInverterData = inverterDataOptions.series.map(series => {
                const randomData = series.data.map(() => Math.random() * 12000); // Random data between 0 and 12000
                return { ...series, data: randomData };
            });

            // Update charts with new data but keep the original static titles
            setSolarDataOptions(prevOptions => ({
                ...prevOptions,
                series: newSolarData, // Keep the title unchanged
            }));

            setInverterDataOptions(prevOptions => ({
                ...prevOptions,
                series: newInverterData, // Keep the title unchanged
            }));
        };

        fetchDataForDate(selectedDate);
    }, [selectedDate]); // Fetch new data whenever the selectedDate changes

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'left', marginBottom: '20px' }}>
                <label>Select Date: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="date-picker"
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '45%' }}>
                    <HighchartsReact highcharts={Highcharts} options={solarDataOptions} />
                </div>
                <div style={{ width: '45%' }}>
                    <HighchartsReact highcharts={Highcharts} options={inverterDataOptions} />
                </div>
            </div>
        </div>
    );
}

export default SolarChart;
