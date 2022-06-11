import React from 'react'
import{ getItem} from '../fireStore/firebase'
import ItemDeatils from './ItemDeatils';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';


const ItemDetailConteiner = () => {
    const {Id} = useParams()
    
    const [detail, setDetail] = useState([])
    useEffect(() => {
      getItem().then((el) => { 
        const prod = el.find( item => { return item.id === Id })
        setDetail(prod); 
        })
      },[Id])
    
     return (
    <div><ItemDeatils  item={detail}/></div>
  )
}

export default ItemDetailConteiner