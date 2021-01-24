import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <React.Fragment>
            <h1>
                Sitio no encontrado
            </h1>
            <h4>
                <Link to='/'>Ir al inicio</Link>
            </h4>
        </React.Fragment>
    )
}

export default NotFound;
