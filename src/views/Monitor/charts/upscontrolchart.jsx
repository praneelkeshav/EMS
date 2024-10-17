import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const UPSControlChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [soc, setSoc] = useState(71); // Default SoC %
    const [energyAvailable, setEnergyAvailable] = useState(31.24); // Default available energy

    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'column',
            zoomType: 'x',
        },
        title: {
            text: '',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#2c3e50',
            },
        },
        xAxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
            title: {
                text: null,
            },
        },
        yAxis: [{
            title: {
                text: 'Energy (kWh)',
            },
        }, {
            opposite: true,
            title: {
                text: 'SoC(%)',
            },
            max: 120, // Adjust for better readability of SoC(%)
        }],
        legend: {
            align: 'center',
            verticalAlign: 'top',
            layout: 'horizontal',
        },
        series: [
            {
                name: 'Charging Energy',
                data: [0.008, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008],
                color: '#f1c40f',
                type: 'column',
            },
            {
                name: 'Discharging Energy',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: '#e74c3c',
                type: 'column',
            },
            {
                name: 'Pack SoC(%)',
                data: [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
                color: '#e74c3c',
                type: 'line',
                yAxis: 1,
                marker: {
                    enabled: false,
                },
            },
        ],
        credits: {
            enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
    });

    useEffect(() => {
        const fetchDataForDate = (date) => {
            const formattedDate = format(date, 'dd/MM/yyyy');
            console.log(`Fetching data for: ${formattedDate}`);

            // Simulate new SoC and energy data based on the selected date
            const randomSoc = Math.round(Math.random() * 100); // Random SoC %
            const randomEnergyAvailable = Math.random() * 50; // Random available energy

            const newChargingData = chartOptions.series[0].data.map(() => Math.random() * 0.01);
            const newDischargingData = chartOptions.series[1].data.map(() => Math.random() * 0.01);
            const newSocData = chartOptions.series[2].data.map(() => randomSoc);

            // Update SoC and available energy
            setSoc(randomSoc);
            setEnergyAvailable(randomEnergyAvailable);

            // Update chart data
            setChartOptions(prevOptions => ({
                ...prevOptions,
                series: [
                    { ...prevOptions.series[0], data: newChargingData },
                    { ...prevOptions.series[1], data: newDischargingData },
                    { ...prevOptions.series[2], data: newSocData },
                ],
            }));
        };

        fetchDataForDate(selectedDate);
    }, [selectedDate]);

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                <label style={{ fontWeight: 'bold', color: '#b50000', fontSize: '20px', marginRight: '10px' }}>Date:</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="date-picker"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '2px solid #b50000',
                        borderRadius: '8px',
                        textAlign: 'left',
                    }}
                />
            </div>

            <HighchartsReact highcharts={Highcharts} options={chartOptions} />

            <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#2c3e50' }}>
                Soc(%): <span style={{ color: '#3498db',marginRight:'30px' }}>{soc}</span>
                Energy available(kWh): <span style={{ color: '#3498db' }}>{energyAvailable.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default UPSControlChart;
