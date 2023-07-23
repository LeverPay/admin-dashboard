import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const AttendanceChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: "Present",
                data: [75, 78, 80, 74, 75, 79, 80, 82, 83, 86, 90, 75],
            },
            {
                name: "Absent",
                data: [30, 24, 27, 25, 20, 19, 18, 17, 16, 19, 20, 0],
            },
            {
                name: "On leave",
                data: [5, 7, 9, 11, 13, 20, 18, 19, 20, 17, 18, 19],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                // type: "datetime",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            colors: ["#c6efb8", "#f0d2c7", "#e3ecf7"],
            legend: {
                position: "top",
                horizontalAlign: "left",
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
                height={350}
            />
        </div>
    );
};

export default AttendanceChart;
