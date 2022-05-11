import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import inventario from './data/inventario'
import ItemCount from './ItemCount';
import SeAgrego from './SeAgrego';

const ItemDeatils = () => {
    const {ItemId} = useParams()
    const [Item, setItem] = useState({});
    const [Add, setAdd] = useState(false);

    const onAdd = ()=>{
      
      setAdd(()=>{
        console.log("se agrego");
      })
    }
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
            <ItemCount  onAdd={onAdd}>{Add}</ItemCount>
        </div>
    </React.Fragment>
  )
}

export default ItemDeatils