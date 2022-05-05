import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import inventario from './data/inventario'
const ItemDeatils = () => {
    const {ItemId} = useParams()
    const [Item, setItem] = useState({});
    
    useEffect(() => {
       setItem( inventario.find(i => i.id = ItemId ))
    }, [ItemId]);
  
  return (
    <React.Fragment>
        <div>
            <img src={Item.imagenD} />
            <li>{Item.nombre}</li>
            <li>{Item.price}</li>
            <li>{Item.descripcion}</li>
            <li>{Item.id}</li>
        </div>
    </React.Fragment>
  )
}

export default ItemDeatils