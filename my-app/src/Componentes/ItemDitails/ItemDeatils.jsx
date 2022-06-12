import React from 'react'
import { useEffect,useState } from 'react';
import IrAlcarrito from './IrAlcarrito';

import ItemCount from './ItemCount';


const ItemDeatils = (props) => {
  
  const [add, setAdd] = useState(false);
    const {id,title, price, imagen, description,stock} = props.item
    
    
    const onAdd = (count)=>{
      setAdd(true)
    }
    
   
  
  return (
    <React.Fragment> 
        <div>
            <img src={imagen}/>
            <div>Producto:{title}</div>
            <div><p>Precio:{price}</p></div>
            <div><p>{description}</p></div>
           {add ? <IrAlcarrito/> :  <ItemCount id={id} stock={stock} initial={1} onAdd={onAdd}/>}
        </div>
    </React.Fragment>
  )
}

export default ItemDeatils