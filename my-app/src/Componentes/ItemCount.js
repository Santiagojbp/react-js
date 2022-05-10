import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = () => {
    const [count, setcount] = useState(second);
    const onAdd = ()=>{

    }
    return (
    <React.Fragment>
        <Button >+</Button>
        <strong>{count}</strong>
        <Button>-</Button>
        <Button onClick={onAdd}>Agregar</Button>
    </React.Fragment>
  )
}

export default ItemCount