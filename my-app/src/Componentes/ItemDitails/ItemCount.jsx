import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext';
import { useCartContext } from '../context/CartContext';


const ItemCount = ({stock,initial,onAdd,id}) => {
  
  const {addToCart} = useCartContext()
  const {producto} = useAppContext()
  
  const [count, setcount] = useState(initial);
  const addHandler =()=>{
    if (count < stock ) {
       setcount(count + 1)
    }
   
  }
  const resHandler =()=>{
    if (count > initial) {
      setcount(count - 1)
    }
  }

  const handleKlick = (id,cantidad)=>{
    const findProduct = producto.find((prod) => prod.id === id)
    if (!findProduct) {
      alert('no esta')
      return
    }
      addToCart(findProduct, cantidad)
      onAdd(count)
  }
  
  return (
    <React.Fragment>
        <Button onClick={addHandler}>+</Button>
        <strong>{count}</strong>
        <Button onClick={resHandler}>-</Button>
        <button onClick={()=>handleKlick(id, count)}>agregar</button>
    </React.Fragment>
  )
}

export default ItemCount