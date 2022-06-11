import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'




export const CartContext = createContext({
    cart: []
})

export const useCartContext = ()=>  useContext(CartContext)

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    
    const isInCart = (id)=> cart.find((producto) => producto.id == id)
    
    const addToCart = (producto, cantidad) => {
		const newCart = [... cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id)].quantity += cantidad

			setCart(newCart)
			return
		}

		producto.quantity = cantidad
		setCart([...newCart, producto])
	}
    
    const cantidadItemsInCart = ()=>{
        let cantidad = 0 
        cart.forEach((el)=> cantidad += el.quantity)
        return cantidad
    }
    
    const deleteFromCart = (producto)=>{
        const newCart = [... cart]
        const inCart = isInCart(producto.id)
        if (!inCart) {
            return
        }
        const deleteProducto = newCart.filter((prod)=> prod.id !== producto.id)
        setCart(deleteProducto)
    }
    
    const cleanCart = ()=>{
         setCart([])
    }
    
    const pTotal = ()=>{
        let pT = 0
        cart.forEach((el)=> pT += (el.price * el.quantity))
        return pT
    }
    
    console.log(cart);
    return(
        <CartContext.Provider value={{cart,addToCart,deleteFromCart,cleanCart,setCart,cantidadItemsInCart,pTotal}}>
            {children}
        </CartContext.Provider>
    )
}
