import React from 'react'
import './ChartsPage.css'
import BarChart from './BarChart.js'
function ChartsPage() {
    const objects =[
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Szczytno',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Purda',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},
        {title:'Pasym',name:'asd',data:[14,15,13,52,34,22], allTime:124, daily:24},

];
    
    
    
    return (
        <div className="Charts__Page">
           
            <div className="Charts__Block">
           
            {objects.map((object)=>(
                    <BarChart data={object.data}
                    name={object.name}
                    title={object.title}
                    allTime={object.allTime}
                    daily={object.daily}/>
                    ))}  
            </div>
        </div>
    )
}

export default ChartsPage
