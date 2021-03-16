import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pg404.css'
const Pg404 = () => {
    return (
        <div className = 'err'>
            <h1>Error 404!</h1>
            <p>Page Not Found</p>
            <NavLink to = '/'> Go Back </NavLink>
        </div>
    )
}

export default Pg404;
