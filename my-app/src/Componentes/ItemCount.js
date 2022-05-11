import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'


const ItemCount = ({onAdd}) => {
  const [count, setcount] = useState(0);
  const addHandler =()=>{
    setcount(count + 1)
  }
  const resHandler =()=>{
    setcount(count - 1)
  }
  
  return (
    <React.Fragment>
        <Button onClick={addHandler}>+</Button>
        <strong>{count}</strong>
        <Button onClick={resHandler}>-</Button>
        <Button onClick={onAdd}>agregar</Button>
    </React.Fragment>
  )
}

export default ItemCount