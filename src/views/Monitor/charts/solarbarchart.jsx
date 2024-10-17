import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ExpectedVsActualChart = () => {
    const chartOptions = {
        chart: {
            type: 'column' // Bar chart with vertical columns
        },
        title: {
            text: 'Expected VS Actual Generation (kwh)',
            style: {
                color: 'black',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Energy (kWh)'
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
        },
        series: [
            {
                name: 'Actual Energy (kWh)',
                data: [0, 0, 0, 0, 0, 50, 100, 200, 300, 400, 1000, 1200],
                color: '#28a745' // Green for actual energy
            },
            {
                name: 'Expected Energy (kWh)',
                data: [0, 0, 0, 0, 0, 60, 120, 250, 350, 450, 1100, 1300],
                color: '#007bff' // Blue for expected energy
            }
        ],
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
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

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
}

export default ExpectedVsActualChart;
