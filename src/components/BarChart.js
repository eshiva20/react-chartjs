import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import './BarChart.css'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "React",
        data: [10, 24, 30],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Angular",
        data: [8, 21, 14],
        backgroundColor: "orange",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive:true
  };

  return (
    <div>
      <div className="main" >
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default BarChart;
