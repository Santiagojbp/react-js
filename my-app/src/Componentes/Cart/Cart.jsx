import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
  const {cart,cantidadItemsInCart,cleanCart,pTotal} = useContext(CartContext)
  
  if (cart.length == 0) {
    return(
      <div>
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
          <div>
            <p>cantidad:{cantidadItemsInCart()}</p>
            <p>precio Toral:{pTotal()}</p>
            <button onClick={()=>cleanCart()}>Vaviar Carrito</button>
          </div>
          <div>
            <NavLink to={'/terminar_compra'}>Terminar Compra</NavLink>
          </div>
        </div>
    )
  }
}

export default Cart