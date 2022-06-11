import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({item}) => {
    const {deleteFromCart} = useContext(CartContext)
  return (
    <>
        <div>
            <p>{item.title}</p>
        </div>
        <div>
            <button onClick={()=>deleteFromCart(item)}>quitar</button>
        </div>
    </>
  )
}

export default ItemCart