import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from 'react-chartjs-2'

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
)

const LineChart = () => {

  const data={
    labels:['jan','feb','mar',"April"],
    datasets:[{
      label:'React', 
      data:[41,20,31,23],
      backgroundColor:"aqua",
      borderColor:"black",
      tension:'0.4'
    }]
  }

  const options={

  }


  return (
    <div className='main'>
      <h1>Line</h1>
      <Line options={options} data={data} ></Line>
    </div>
  )
}

export default LineChart
