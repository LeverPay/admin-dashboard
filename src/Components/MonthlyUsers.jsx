import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MonthlyUsers = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Month Sales',
        data: [
          2200, 2000, 1500, 1800, 2500, 3000, 2800, 2400, 2000, 2200, 2300,
          2600,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],

        labels: {
          show: false, // hide x-axis labels
        },
        axisBorder: {
          show: false, // hide x-axis border
        },
      },
      yaxis: {
        labels: {
          show: false, // hide y-axis labels
        },
        axisBorder: {
          show: false, // hide y-axis border
        },
      },
      tooltip: {
        enabled: false, // hide tooltip
      },
      colors: ['#082E88'],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={170}
      />
    </div>
  );
};

export default MonthlyUsers;
