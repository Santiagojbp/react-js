import React, { useState } from "react"
import {Strong,Button} from 'react-bootstrap'
import inventario from "./data/inventario"



    
function Productos () {
    const [suma,setSuma] = useState(0)
    const addHandler = ()=>{
      console.log('se ha sumado');
      setSuma(suma + 1)
    }
    const resHandler=()=>{
      setSuma(suma - 1)
    }
    return(
        <>  
          {inventario.map(p =>{
                  return(
                    <div key={p.id}  className="col-lg-2 contenedor-card" id="p">
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
                  )}
          )}
      </>
    )
    }
    

export default Productos
