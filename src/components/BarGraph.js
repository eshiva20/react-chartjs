import React from 'react'
import { LinearScale,Chart as ChartJS, CategoryScale,BarElement,Tooltip,Title,Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useState,useEffect  } from 'react'

ChartJS.register(
  CategoryScale,
  BarElement,Tooltip,Title,Legend,LinearScale
)

const BarGraph = () => {

  const [charData,setChartData]=useState({
    datasets:[]
  })

  const [chartOptions,setChartOptions]=useState({})

  useEffect(() => {
    setChartData({
      labels: ["React", "Node", "Angular", "Fulter", "Dot.Net"],
      datasets: [
        {
          label: "Number of Students in Technology",
          data: [12, 55, 34, 120, 420],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Whom'st let the dogs out",
        },
      },
    });
  }, []);


  return (
    <div>
      <Bar options={chartOptions} data={charData}/>
    </div>
  )
}

export default BarGraph
