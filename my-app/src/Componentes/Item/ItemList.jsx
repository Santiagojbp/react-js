import React from 'react'

import ItemCard from './ItemCard';
const ItemList = ({categoria}) => {
  
  
  return (
    <>
      <div className='row'>
        {categoria && categoria.map((p)=>(<ItemCard key={p.id} item={p}/>))}
      </div>
    </>
  )
}

export default ItemList