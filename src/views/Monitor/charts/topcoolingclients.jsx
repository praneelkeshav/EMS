import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const CoolingClientsChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
    const [selectedClient, setSelectedClient] = useState('All'); // Default to 'All' clients

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'TOP Cooling Clients'
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00']
        },
        yAxis: {
            title: {
                text: 'Energy (kWh)'
            },
            max: 150, // Set max limit to 400 for the Y-axis similar to the screenshot
        },
        series: [
            {
                name: 'Client A',
                data: [10, 15, 12, 14, 18, 20, 25, 27, 35, 40, 45],
                color: 'red'
            },
            {
                name: 'Client B',
                data: [5, 7, 8, 12, 14, 17, 20, 22, 28, 30, 40],
                color: 'blue'
            },
            {
                name: 'Client C',
                data: [3, 4, 5, 7, 8, 10, 12, 14, 18, 20, 22],
                color: 'green'
            },
            {
                name: 'Client D',
                data: [8, 10, 12, 15, 17, 20, 23, 25, 28, 30, 35],
                color: 'purple'
            },
            {
                name: 'Client E',
                data: [6, 8, 9, 11, 13, 15, 18, 22, 25, 28, 33],
                color: 'orange'
            },
            {
                name: 'Client F',
                data: [2, 4, 6, 7, 9, 11, 13, 15, 17, 22, 26],
                color: 'cyan'
            }
        ],
        credits: {
            enabled: false, // Disable credits (watermark)
          },
        chart: {
            type: 'line'
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        
    });

    useEffect(() => {
        // Simulate data fetch based on selected date and selected client
        const fetchDataForClient = (date, client) => {
            const formattedDate = format(date, 'yyyy-MM-dd');
            console.log(`Fetching data for: ${formattedDate}, Client: ${client}`);

            // Filter the series based on selected client
            const newSeriesData = chartOptions.series
                .filter(series => client === 'All' || series.name === client)
                .map(series => {
                    const randomData = series.data.map(() => Math.random() * 100); // Simulate data update
                    return { ...series, data: randomData };
                });

            setChartOptions(prevOptions => ({
                ...prevOptions,
                series: newSeriesData,
                title: { text: `TOP Cooling Clients for ${formattedDate}` }
            }));
            
        };

        fetchDataForClient(selectedDate, selectedClient);
    }, [selectedDate, selectedClient]);

    return (
        <div>
            {/* Date Picker */}
            <div style={{ marginBottom: '20px' }}>
                <label>Select Date: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>

            {/* Client Select Dropdown */}
            <div style={{ marginBottom: '20px' }}>
                <label>Select Client: </label>
                <select
                    value={selectedClient}
                    onChange={(e) => setSelectedClient(e.target.value)}
                >
                    <option value="All">All Clients</option>
                    <option value="Client A">Client A</option>
                    <option value="Client B">Client B</option>
                    <option value="Client C">Client C</option>
                    <option value="Client D">Client D</option>
                    <option value="Client E">Client E</option>
                    <option value="Client F">Client F</option>
                </select>
            </div>

            {/* Highcharts Line Chart */}
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
};

export default CoolingClientsChart;
