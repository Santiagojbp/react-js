import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({item}) => {
    const {deleteFromCart} = useContext(CartContext)
  return (
    <>
        <div className='row pCart'>
            <p className='col-lg-3'>Producto: {item.title}</p>
            <p className='col-lg-3'>cantidad:{item.quantity}</p>
            <p className='col-lg-3'>Precio:{item.price}</p>
            <div className='col-lg-3'>  
              <button className='btnC'  onClick={()=>deleteFromCart(item)}><i class="bi bi-cart-dash"></i></button>
            </div>
        </div>
            
    </>
  )
}

export default ItemCart