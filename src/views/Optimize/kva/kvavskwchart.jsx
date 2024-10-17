import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const generateRandomData = (points, min, max) => {
    const data = [];
    const now = Date.now(); // Current timestamp
    const interval = 3600000; // 1 hour in milliseconds

    for (let i = 0; i < points; i++) {
        const time = now - (interval * (points - i)); // Generate timestamp for each point
        const value = Math.floor(Math.random() * (max - min + 1)) + min; // Random value between min and max
        data.push([time, value]);
    }

    return data;
};

const KvaVsKwChart = () => {
    const options = {
        title: {
            text: 'MVP Wise (kW) vs Apparent Power (kVA)'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: null
            }
        },
        yAxis: [{
            title: {
                text: 'Power (kW / kVA)'
            },
            min: 0,
            max: 5000, // Set according to the range in your chart
            tickInterval: 1000
        }],
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        },
        series: [
            {
                name: 'Peak Demand (kVA)',
                data: generateRandomData(50, 3000, 4500), // Random data for Peak Demand
                type: 'line',
                color: '#0088FF',
                dashStyle: 'Solid'
            },
            {
                name: 'mvp1 (kW)',
                data: generateRandomData(50, 500, 1500), // Random data for mvp1
                type: 'line',
                color: '#00FF00',
                dashStyle: 'Solid'
            },
            {
                name: 'mvp2 (kW)',
                data: generateRandomData(50, 400, 1400), // Random data for mvp2
                type: 'line',
                color: '#FF0000',
                dashStyle: 'Solid'
            },
            {
                name: 'mvp3 (kW)',
                data: generateRandomData(50, 300, 1300), // Random data for mvp3
                type: 'line',
                color: '#FFA500',
                dashStyle: 'Solid'
            },
            {
                name: 'mvp4 (kW)',
                data: generateRandomData(50, 200, 1200), // Random data for mvp4
                type: 'line',
                color: '#0000FF',
                dashStyle: 'Solid'
            },
            {
                name: 'LtoPower (kW)',
                data: generateRandomData(50, 100, 1100), // Random data for LtoPower
                type: 'line',
                color: '#800080',
                dashStyle: 'Solid'
            },
            {
                name: 'LimitLine1',
                data: generateRandomData(50, 4000, 4000), // Random constant value for LimitLine1
                type: 'line',
                color: '#FFD700',
                dashStyle: 'Dash'
            },
            {
                name: 'LimitLine2',
                data: generateRandomData(50, 4500, 4500), // Random constant value for LimitLine2
                type: 'line',
                color: '#FF0000',
                dashStyle: 'Dash'
            }
        ],
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                }
            }
        },
        tooltip: {
            shared: true
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
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default KvaVsKwChart;
