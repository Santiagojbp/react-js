import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({item}) => {
    const {deleteFromCart} = useContext(CartContext)
  return (
    <>
        <div className='row pCart'>
            <p className='col-lg-3'>{item.title}</p>
            <p className='col-lg-3'>{item.quantiti}</p>
            <p className='col-lg-3'>{item.price}</p>
            <button  className='col-lg-3' onClick={()=>deleteFromCart(item)}><i class="bi bi-cart-dash"></i></button>
        </div>
            
    </>
  )
}

export default ItemCart