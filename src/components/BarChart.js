import React from 'react'
import {Line} from 'react-chartjs-2'
import './BarChart.css'
function BarChart(props) {
    return (
        <div className="BarChart">
            <div className="BarChart__Title">{props.title}</div>
            <div className="BarChart__Data">
                <div className="BarChart__DataItem">Pozyskana ilosc dzis:{props.daily} kWh</div>
                <div className="BarChart__DataItem">Pozyskana ilosc ogolem:{props.allTime} kWh</div>
            </div>
           <div className="BarChart__Chart">
           
                <Line 
                data={{
                    labels: ['6:00','8:00','10:00','12:00','14:00','16:00'],
                    datasets:[
                        {
                            label:props.name,
                            data:props.data,
                            backgroundColor:'#00d563',
                        }
                    ]
                }}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio:false,
                    fill:false,
                    responsive:true,
                    scales:{
                        yAxes:[{
                            ticks:{
                                beginAtZero:true,
                            }
                        }]
                    }
                }}
                />
            </div>
        </div>
    )
}

export default BarChart
