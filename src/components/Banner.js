import React from 'react'
import './Banner.css'
import BarChart from './BarChart.js'
function Banner() {
    const objects =[
        {name:'asd',data:[14,15,13,52,34,22]},

];
    return (
        <div>
            <div className="Banner__container">
                <div className="Banner__today">Dziś: 14,3 kWh</div>
                <div className="Banner__all">Ogółem: 233 kWh</div>
                <div className="Banner__graph">
                    {objects.map((object)=>(
                    <BarChart data={object.data}
                    name={object.name}/>
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default Banner
