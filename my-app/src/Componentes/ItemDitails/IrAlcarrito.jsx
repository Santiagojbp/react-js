import React from 'react'
import { NavLink } from 'react-router-dom'

const IrAlcarrito = () => {
  return (
    <>
      <div>
        <NavLink to={'/cart'}><button className='btnConter'>Ir al carrito</button></NavLink>
      </div>
    </>
  )
}

export default IrAlcarrito