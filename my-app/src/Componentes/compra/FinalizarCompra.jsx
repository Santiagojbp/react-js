import{ React, useState,useContext} from 'react'
import {CartContext} from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
const FinalizarCompra = () => {
  
  const {pTotal,cart,cleanCart} = useContext(CartContext)
 
  const [client, setClient] = useState({
     nombre:"",
     apellido:"",
     telefono:"",
     direccion:"",
 }) 
  const cargarDatos=(evn)=>{
    const target = evn.target;
    const valor = target.value;
    const name = target.name;
    setClient({ ...client , [name]: valor });
    console.log(client)
    
  }
  
  const db = getFirestore()
  
  const CompraColeccion = collection(db,"compra")
  
  const terminarCompras = async (evn) => {
    evn.preventDefault()
    const productos = cart.map( ({id,title})=> ({id,title}));
    console.log(productos)
    const compra = {
        cliente: [client],
        productos: productos,
        total: pTotal(),
    };
    
    const guardarCompra = await addDoc(CompraColeccion,compra)
    console.log(guardarCompra);
    
    cleanCart();

  }
    return (
    <>
      <form className='formulario'>  
        <ul className='formularioUl'>
          <li><input className='iForm' type="text" name='nombre' onChange={(evn) => cargarDatos(evn)} value={client.nombre} placeholder="nombre" /></li>
          <li><input className='iForm' type="text" name='apellido' onChange={(evn)=>  cargarDatos(evn)} value={client.apellido} placeholder="apellido"/></li>
          <li><input className='iForm' type="number" name='telefono' onChange={(evn)=> cargarDatos(evn)} value={client.telefono} placeholder="telefono"/></li>
          <li><input className='iForm' type="text" name='direccion' onChange={(evn)=> cargarDatos(evn)} value={client.direccion} placeholder="direccion"/></li>
          <li><button className='bForm' type="submit" onClick={terminarCompras} placeholder='guardar'>guardar</button></li>
        </ul>
      </form>
    </>
  )
}

export default FinalizarCompra