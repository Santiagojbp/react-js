import React from 'react'
import  { useEffect, useState } from 'react'
import inventario from './data/inventario'
import ItemCard from './ItemCard';
const ItemList = () => {
  const [ Items, setItems] = useState([])
  
  useEffect(() => {
    getItems()
  }, []);
  const getItems = ()=>{
    const getItemsPromise = new Promise((resolve ) => {
      setTimeout(()=>{
        resolve(inventario)
      },1000)
    })
    getItemsPromise.then(data => {
      setItems(data)
    })
  }
  
  
  return (
    <div>{Items.map(i => <ItemCard key={i.id} item={i}/>)}</div>
  )
}

export default ItemList