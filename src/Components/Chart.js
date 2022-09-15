import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Chart = () => {
  ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 10,
        max: 24,
        beginAtZero: true,
        ticks: {
          stepSize: 3.5,
          callback: (value) => value + "k",
        },
        grid: {
          borderDash: [5],
        },
      },
    },
  };

  const labels = [
    "",
    "",
    "",
    "Apr 04",
    "",
    "",
    "Apr 07",
    "",
    "",
    "Apr 10",
    "",
    "",
    "Apr 13",
    "",
    "",
    "Apr 16",
    "",
    "",
    "",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20,
          20, 22,
        ],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192, 0.1)",
        tension: 0.2,
        fill: true,
        fill: { value: 17 },
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default Chart;
