import React from 'react'
import { useParams } from 'react-router-dom'
import inventario from './data/inventario';
import {useState,useEffect} from 'react'
function Cart (){
    const {ItemCartId} = useParams() 
    const [ItemCart, setItemCart] = useState({});
    useEffect(() => {
        setItemCart(inventario.map(i => i.id = ItemCartId))
    }, [ItemCartId]);
    return (
    <div>{ItemCart.nombre}</div>
  )
}

export default Cart