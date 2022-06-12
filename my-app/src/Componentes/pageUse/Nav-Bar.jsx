import React from "react"

import { NavLink, } from "react-router-dom"
import CartWidget from "../Cart/CartWidget"
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
                    <nav className="NavBar">  
                        <div className="row">  
                            <div className="col-lg-11">
                                <ul className="Links">
                                    <li><NavLink className='NavLink' to={`/`}>Inicio</NavLink></li>
                                    <li><NavLink className='NavLink' to={`/categoria/Una`}>Una Abitacion</NavLink></li>
                                    <li><NavLink className='NavLink' to={'/categoria/dos'}>Dos Abitaciones</NavLink></li>
                                    <li><NavLink className='NavLink' to={'/categoria/tres'}>Tres Abitaciones</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-1">
                                 <CartWidget/>
                            </div>
                        </div> 
                        <ul className="Links">
                            
                        </ul>
                    </nav> 
                </div>
            </header>
        </React.Fragment>
    
    )
 }
 export default NavBar