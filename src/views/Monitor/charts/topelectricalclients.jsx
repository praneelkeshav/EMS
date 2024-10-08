import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DynamicLineChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'TOP Electrical Clients'
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00']
        },
        yAxis: {
            title: {
                text: 'Energy (kWh)'
            }
        },
        series: [
            {
                name: 'Client A',
                data: [150, 230, 220, 240, 300, 280, 290, 320, 350, 370, 390],
                color: 'red'
            },
            {
                name: 'Client B',
                data: [50, 60, 70, 80, 100, 120, 150, 160, 180, 200, 220],
                color: 'blue'
            },
            {
                name: 'Client C',
                data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130],
                color: 'green'
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
        // Simulate data fetch based on selected date
        const fetchDataForDate = (date) => {
            const formattedDate = format(date, 'yyyy-MM-dd');
            console.log(`Fetching data for: ${formattedDate}`);

            // Simulate new data fetch for the selected date
            const newSeriesData = chartOptions.series.map(series => {
                const randomData = series.data.map(() => Math.random() * 400); // Random data between 0 and 400
                return { ...series, data: randomData };
            });

            setChartOptions(prevOptions => ({
                ...prevOptions,
                series: newSeriesData,
                title: { text: `TOP Electrical Clients for ${formattedDate}` }
            }));
        };

        fetchDataForDate(selectedDate);
    }, [selectedDate]);

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label>Select Date: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>

            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
};

export default DynamicLineChart;
