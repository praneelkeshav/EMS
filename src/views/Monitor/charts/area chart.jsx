// import React, { useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const AreaChart = () => {
//   const [date, setDate] = useState('24/9/2024');
  
//   const chartOptions = {
//     chart: {
//       type: 'area',
//     },
//     title: {
//       text: 'Daily Demand (kVA)',
//       style: {
//         color: '#000000', // Title color
//         fontWeight: 'bold',
//       },
//     },
//     xAxis: {
//       type: 'datetime',
//       labels: {
//         format: '{value:%H:%M}', // Display time in hours and minutes
//       },
//     },
//     yAxis: {
//       title: {
//         text: 'Apparent Power (kVA)',
//       },
//       max: 5000,
//     },
//     series: [
//       {
//         name: 'Apparent Power (kVA)',
//         data: [
//           [Date.UTC(2024, 8, 23, 0, 0), 1500],
//           [Date.UTC(2024, 8, 23, 1, 0), 1500],
//           [Date.UTC(2024, 8, 23, 2, 0), 1500],
//           [Date.UTC(2024, 8, 23, 3, 0), 1500],
//           [Date.UTC(2024, 8, 23, 4, 0), 2000],
//           [Date.UTC(2024, 8, 23, 5, 0), 3000],
//           [Date.UTC(2024, 8, 23, 6, 0), 4000],
//           [Date.UTC(2024, 8, 23, 7, 0), 4500],
//           [Date.UTC(2024, 8, 23, 8, 0), 4800],
//           [Date.UTC(2024, 8, 23, 9, 0), 4700],
//           [Date.UTC(2024, 8, 23, 10, 6), 4700],
//         ],
//         color: '#800080',
//         fillOpacity: 0.6,
//       },
//     ],
//     plotOptions: {
//       area: {
//         marker: {
//           enabled: false,
//         },
//       },
//     },
//     tooltip: {
//       shared: true,
//     },
//     responsive: {
//       rules: [{
//         condition: {
//           maxWidth: 500,
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom',
//           },
//         },
//       }],
//     },
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="date" style={{ fontWeight: 'bold', marginRight: '10px' }}>Date:</label>
//         <input
//           type="text"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
//         />
//       </div>

//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </div>
//   );
// };

// export default AreaChart;




import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {
  const [date, setDate] = useState('');

  // Automatically update the date when the component mounts
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
    setDate(currentDate);
  }, []); // Empty dependency array ensures it runs only once on mount

  const chartOptions = {
    chart: {
      type: 'spline', // Change from area to spline for smooth density-like curves
    },
    title: {
      text: 'Daily Demand (kVA)',
      style: {
        color: '#000000',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%H:%M}', // Display time in hours and minutes
      },
    },
    yAxis: {
      title: {
        text: 'Apparent Power (kVA)',
      },
      max: 5000,
    },
    series: [
      {
        name: 'Apparent Power (kVA)',
        data: [
          [Date.UTC(2024, 8, 23, 0, 0), 1500],
          [Date.UTC(2024, 8, 23, 1, 0), 1500],
          [Date.UTC(2024, 8, 23, 2, 0), 1500],
          [Date.UTC(2024, 8, 23, 3, 0), 1500],
          [Date.UTC(2024, 8, 23, 4, 0), 2000],
          [Date.UTC(2024, 8, 23, 5, 0), 3000],
          [Date.UTC(2024, 8, 23, 6, 0), 4000],
          [Date.UTC(2024, 8, 23, 7, 0), 4500],
          [Date.UTC(2024, 8, 23, 8, 0), 4800],
          [Date.UTC(2024, 8, 23, 9, 0), 4700],
          [Date.UTC(2024, 8, 23, 10, 0), 4700],
        ],
        color: '#800080',
        fillOpacity: 0.6,
      },
    ],
    plotOptions: {
      spline: {
        marker: {
          enabled: false, 
        },
        fillOpacity: 0.6, 
      },
    },
    tooltip: {
      shared: true,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="date" style={{ fontWeight: 'bold', marginRight: '10px' }}>Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          readOnly // Make the date field read-only
          style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default AreaChart;
