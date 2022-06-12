import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
  const {cart,cantidadItemsInCart,cleanCart,pTotal} = useContext(CartContext)
  
  if (cart.length == 0) {
    return(
      <div className='vacio'>
        <p>carrito vacio</p>
      </div>
    )
  }else{
    return(
  
        <div>
          <div>
          {cart.map((item) => {
                        return <ItemCart key={item.id} item={item}></ItemCart>;
                    })}
          </div>
          <div className='row totales'>
            <p className='col-lg-2'>cantidad:{cantidadItemsInCart()}</p>
            <p className='col-lg-2'>precio Toral:{pTotal()}</p>
          </div>
          <div className='row cBtn'>
            <div className='col-lg-9'>
              <button className='btnF'  onClick={()=>cleanCart()}><i class="bi bi-cart-x"></i></button>
            </div>
            <div className='col-lg-3'>
              <NavLink to={'/terminar_compra'}><button className='btnF'>finalizar compra</button></NavLink>
            </div>
            
          </div>
        </div>
    )
  }
}

export default Cart