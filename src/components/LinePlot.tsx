import React from 'react'
import {Line} from 'react-chartjs-2'
import BarPlot from './BarPlot'
import PiePlot from './PiePlot'

const data = {
  labels:["Mon","Tue",'Wed',"Thu",'Fri','Sat','Sun'],
  datasets:[
    {
      label:'Demo line plot',
      backgroundColor:'#008080',
      borderColor:'#7fffd4',
      pointBorderWidth:10,
      data:[5,6,9,15,30,40,80],
    }
]
}

const LinePlot:React.FC = () => {
  return (
    <div>
      <Line data={data}/>
      <PiePlot/>
      <BarPlot/>
    </div>
  )
}

export default LinePlot