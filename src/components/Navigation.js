import React from 'react'
import Logo from '../images/logo.svg'

function Navigation() {
    return (
        <div className="navigation">
           <nav>
            <img src={Logo} alt="logo" />
            <i className="fa fa-bars fa-2x ham-logo" aria-hidden="true"></i>
           </nav>
        </div>
    )
}

export default Navigation
