import React, { useState } from "react"
import {Strong,Button} from 'react-bootstrap'
import inventario from "./data/inventario"
import ItemDetails from "./ItemDieaels"


    
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
      <React.Fragment>
        {inventario.map(p => <ItemDetails key={p} inventario={p}/>)}
      </React.Fragment>
    )
    }
    

export default Productos
