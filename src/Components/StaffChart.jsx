import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Month Sales',
        data: [2200, 2000, 1500, 1800, 2500, 3000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '20 Aug',
          '21 Aug',
          '22 Aug',
          '23 Aug',
          '24 Aug',
          '25 Aug',
        ],
      },
      colors: ['#EF2C5A'],
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              offsetY: 20,
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={240}
      />
    </div>
  );
};

export default ApexChart;
