import {useState ,useEffect} from 'react';
import { Line } from "react-chartjs-2";

const AreaChart = () => {

const [chartData , setChartData] = useState({})
const  Chart = () =>{
  setChartData({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "% of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 134,159,0.4)"
        ],
        borderWidth: 2
      }
    ]
  })
}
  useEffect(() =>{
    Chart()
  },[])

    return (
      <Line data={chartData} />

    )
  
}

export default AreaChart;