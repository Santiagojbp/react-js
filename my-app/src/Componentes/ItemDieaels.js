import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemDetails = ({inventario}) => {
  const [suma,setSuma] = useState(0)
  const addHandler = ()=>{
    console.log('se ha sumado');
    setSuma(suma + 1)
  }
  const resHandler=()=>{
    setSuma(suma - 1)
  }
  return (
    <React.Fragment> 
      <div   className="col-lg-2 contenedor-card" id="p">
        <div className="contenedorCard">
            <div className="card img">
              <img className="card__img img-card" src={p.imagen} alt="Imagen de {producto.nombre} "/>
              <div className="card__text producto-datos">
                  <input value="{producto.id}" type="hidden"/>
                  <h3 className="card__title producto-nombre">{p.nombre}</h3>
                  <p className="precio">"$"{p.precio}</p>
              <div>
                <Button onClick={resHandler}>-</Button>
                <strong>{suma}</strong>
                <Button onClick={addHandler}>+</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ItemDetails