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
  indexAxis: "y",
  maintainAspectRatio: true,
  aspectRatio: 1,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "Stats",
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
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0)",
      },
    },
  },
};

export function BarChart({ stats }) {
  const labels = stats.map((stat) => stat.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stats",
        data: stats.map((stat) => stat.value),
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
