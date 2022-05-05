import React from "react"
import { Link } from "react-router-dom"
function NavBar() { 
    return(
        <React.Fragment>
            <header>
                <div>
                    <div>
                        <h1 className="Titulo">inmobiliaria casas </h1>
                    </div>
                </div>
                <div>
                    <ul className="Links">
                        <li><Link to={`/`}>Inicio</Link></li>
                        <li><a href="#">cuenta</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    
    )
 }
 export default NavBar