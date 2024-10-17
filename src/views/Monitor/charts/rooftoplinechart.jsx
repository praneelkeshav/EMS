import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const RooftopLineChart = () => {
    // Data for Phase Wise Generation (Line Chart)
    const phaseData = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
        datasets: [
            {
                label: 'Phase 1',
                data: [0, 0, 0, 0, 0, 0, 50, 150, 300, 450, 400, 300],
                borderColor: '#42A5F5',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Phase 2',
                data: [0, 0, 0, 0, 0, 0, 30, 100, 200, 350, 300, 250],
                borderColor: '#7E57C2',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    // Data for Expected vs Actual Generation (Bar Chart)
    const expectedActualData = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
        datasets: [
            {
                label: 'Actual Energy (kWh)',
                data: [0, 0, 2, 0, 0, 10, 30, 50, 150, 300, 500],
                backgroundColor: '#42A5F5',
            },
            {
                label: 'Expected Energy (kWh)',
                data: [0, 0, 0, 0, 0, 0, 20, 40, 100, 250, 450],
                backgroundColor: '#7E57C2',
            },
        ],
    };

    // Updated chart options: Remove gridlines and move legend to bottom
    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time',
                },
                grid: {
                    display: false, // Remove gridlines
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Energy Generation (kWh)',
                },
                grid: {
                    display: false, // Remove gridlines
                },
                suggestedMin: 0,
                suggestedMax: 600,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Move legend to the bottom
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ width: '55%' }}>
                <h4>Phase Wise Generation (kwh)</h4>
                <Line data={phaseData} options={options} />
            </div>
            <div style={{ width: '55%' }}>
                <h4>Expected VS Actual Generation (kwh)</h4>
                <Bar data={expectedActualData} options={options} />
            </div>
        </div>
    );
};

export default RooftopLineChart;
