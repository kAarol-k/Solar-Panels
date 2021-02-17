import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className="Nav">
            <div className="Nav__Logo">
                ECO BSSZCZYTNO
            </div>
            <div className="Nav__menu">
                <ol>    
                    <li>Home</li>
                    <li>Charts</li>
                    <li>About</li>
                </ol>
            </div>
        </div>
    )
}

export default Nav
