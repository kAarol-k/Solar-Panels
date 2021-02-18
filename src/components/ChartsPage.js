import React from 'react'
import './ChartsPage.css'
import BarChart from './BarChart.js'

import NewData from './NewData.js'

function ChartsPage() {

    const objects = NewData()
    console.log(objects)
    return (
        <div className="Charts__Page">
           
            <div className="Charts__Block">
           
            {objects.map((object)=>(
                    <BarChart data={object.data}
                    name={'kWh'}
                    title={object.title}
                    allTime={object.alltime}
                    daily={object.daily}/>
                    ))}  
            </div>
        </div>
    )
}

export default ChartsPage
