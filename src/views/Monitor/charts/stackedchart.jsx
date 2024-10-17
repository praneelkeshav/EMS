// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const StackedBarChart = () => {
//   const options = {
//     chart: {
//       type: 'column',  // Make sure the chart type is 'column'
//       height: '40%',

//     },
//     title: {
//       text: 'Chiller Status'
//     },
//     xAxis: {
//       categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
//       title: {
//         text: 'Time'
//       }
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: 'Chillers Status'
//       },
//       stackLabels: {
//         enabled: true,
//         style: {
//           fontWeight: 'bold',
//           color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
//         }
//       }
//     },
//     legend: {
//       align: 'right',
//       x: -30,
//       verticalAlign: 'top',
//       y: 25,
//       floating: true,
//       backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
//       borderColor: '#CCC',
//       borderWidth: 1,
//       shadow: false
//     },
//     tooltip: {
//       headerFormat: '<b>{point.x}</b><br/>',
//       pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
//     },
//     plotOptions: {
//       column: {
//         stacking: 'normal',
//         dataLabels: {
//           enabled: true
//         }
//       }
//     },
//     series: [{
//       name: 'Chiller 1',
//       data: [5, 3, 4, 7, 2, 5, 6, 3, 2, 1, 4, 6]
//     }, {
//       name: 'Chiller 2',
//       data: [2, 2, 3, 2, 1, 3, 2, 3, 6, 4, 2, 5]
//     }, {
//       name: 'Chiller 3',
//       data: [3, 4, 4, 2, 5, 4, 3, 4, 4, 5, 6, 4]
//     }, {
//       name: 'Thermal Discharge',
//       data: [2, 3, 1, 4, 3, 4, 5, 6, 4, 3, 3, 2]
//     }]
//   };

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// const StackedBarLayout = () => {
//   return (
//     <div className="container">
//       {/* Chart Section */}
//       <div className="chart-section" style={{ marginTop: '20px', padding: '0 20px' }}>
//         <StackedBarChart />
//       </div>
//     </div>
//   );
// };

// export default StackedBarLayout;


import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StackedBarChart = () => {
  const options = {
    chart: {
      type: 'column',  // Make sure the chart type is 'column'
      height: '40%',
    },
    title: {
      text: 'Chiller Status'
    },
    xAxis: {
      categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
      title: {
        text: 'Time'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Chillers Status'
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false // Disable data labels
        }
      }
    },
    series: [{
      name: 'Chiller 1',
      data: [5, 3, 4, 7, 2, 5, 6, 3, 2, 1, 4, 6]
    }, {
      name: 'Chiller 2',
      data: [2, 2, 3, 2, 1, 3, 2, 3, 6, 4, 2, 5]
    }, {
      name: 'Chiller 3',
      data: [3, 4, 4, 2, 5, 4, 3, 4, 4, 5, 6, 4]
    }, {
      name: 'Thermal Discharge',
      data: [2, 3, 1, 4, 3, 4, 5, 6, 4, 3, 3, 2]
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const StackedBarLayout = () => {
  return (
    <div className="container">
      {/* Chart Section */}
      <div className="chart-section" style={{ marginTop: '20px', padding: '0 20px' }}>
        <StackedBarChart />
      </div>
    </div>
  );
};

export default StackedBarLayout;
