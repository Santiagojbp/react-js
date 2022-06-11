import React from 'react'
import { useState } from 'react'
import{ getItem} from '../fireStore/firebase'
import ItemList from './ItemList'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

const ItemListConteiner = () => {
  const {categoriaId} = useParams()
  
  const [categoria, setCategorias] = useState()
  
  useEffect(() => {
   if (categoriaId == undefined) {
     getItem().then((res)=> setCategorias(res))
   }else{
     getItem().then((res)=> setCategorias(res.filter((p)=> p.categoria == categoriaId)))
   }
  }, [categoriaId])
  
  return (
    <React.Fragment>
      <ItemList categoria={categoria}/>
    </React.Fragment>
  )
}

export default ItemListConteiner