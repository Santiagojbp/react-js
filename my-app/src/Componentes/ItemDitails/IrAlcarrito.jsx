import React from 'react'
import { NavLink } from 'react-router-dom'

const IrAlcarrito = () => {
  return (
    <>
      <div>
        <NavLink to={'/cart'}>cart</NavLink>
      </div>
    </>
  )
}

export default IrAlcarrito