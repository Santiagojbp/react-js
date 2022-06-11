import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    const {cantidadItemsInCart} = useContext(CartContext)
  return (
    <>
        <NavLink to={'/cart'}><button className='cartWidget'><i className="bi bi-cart">{cantidadItemsInCart()}</i></button></NavLink>
    </>
  )
}

export default CartWidget