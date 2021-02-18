import React, {useState, useEffect} from 'react'
import db from '../Firebase.js'

function NewData() {
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

export default NewData
