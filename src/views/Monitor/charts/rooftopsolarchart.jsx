import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const RooftopSolarChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'area',
            zoomType: 'x',
            backgroundColor: null,
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
            title: {
                text: 'Time in HOURS',
            },
        },
        yAxis: [{
            title: {
                text: 'Energy (kWh)',
            },
        }, {
            opposite: true,
            title: {
                text: 'Irradiation (kWh/m2)',
            },
        }],
        legend: {
            align: 'center',
            verticalAlign: 'top',
            layout: 'horizontal',
        },
        series: [
            {
                name: 'energy(kWh)',
                data: [0, 0, 20, 40, 100, 150, 200, 300, 400, 500, 450],
                color: '#007bff',
                type: 'area',
            },
            {
                name: 'solar_radiation',
                data: [0, 0.02, 0.05, 0.1, 0.2, 0.3, 0.38, 0.42, 0.45, 0.47, 0.40],
                color: '#00b894',
                type: 'area',
                yAxis: 1,
            },
        ],
        tooltip: {
            shared: true,
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            area: {
                fillOpacity: 0.3,
                marker: {
                    enabled: false,
                },
            },
        },
    });

    useEffect(() => {
        const fetchDataForDate = (date) => {
            const formattedDate = format(date, 'dd/MM/yyyy');
            console.log(`Fetching data for: ${formattedDate}`);

            // Simulate fetching data for the selected date
            // Here you can make API calls or update your data accordingly
            const newEnergyData = chartOptions.series[0].data.map(() => Math.random() * 500);
            const newRadiationData = chartOptions.series[1].data.map(() => Math.random() * 0.5);

            setChartOptions(prevOptions => ({
                ...prevOptions,
                series: [
                    { ...prevOptions.series[0], data: newEnergyData },
                    { ...prevOptions.series[1], data: newRadiationData },
                ],
            }));
        };

        fetchDataForDate(selectedDate);
    }, [selectedDate]);

    return (
        <div style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: 'bold', color: 'brown' }}>Date: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="date-picker"
                    style={{ marginLeft: '10px', padding: '5px', fontSize: '16px', fontWeight: 'bold' }}
                />
            </div>

            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default RooftopSolarChart;
