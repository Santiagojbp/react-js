import React from "react"
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
                        <li><a href="#">inicio</a></li>
                        <li><a href="#">cuenta</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    
    )
 }
 export default NavBar