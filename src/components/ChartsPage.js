import React, {useState, useEffect}from 'react'
import './ChartsPage.css'
import BarChart from './BarChart.js'
import db from '../Firebase.js'

function NewData(){

    const [panels, setPanels] = useState([]);
    useEffect(()=>{
        db.collection('panels')
            .onSnapshot((snapshot) =>{
                const newPanels = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setPanels(newPanels)
            })
         },[])
 return panels
}

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
