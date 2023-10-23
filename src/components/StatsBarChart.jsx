import { Bar } from "react-chartjs-2";
import { Colors } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

const options = {
  devicePixelRatio: 3,
  responsive: true,
  indexAxis: "x",
  maintainAspectRatio: true,
  aspectRatio: 1,
  elements: {
    bar: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 1)",
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "",
    },
    colors: {
      forceOverride: true,
    },
  },
  layout: {
    padding: 20,
  },
  scales: {
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        display: true,
        color: "rgba(0, 0, 0, 1)",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0)",
      },
      ticks: {
        color: "rgba(0, 0, 0, 1)",
      },
      min: 0,
      max: 255,
      beginAtZero: true,
    },
  },
};

export function BarChart({ stats }) {
  const labels = stats.map((stat) => stat.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Value",
        data: stats.map((stat) => stat.value),
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
