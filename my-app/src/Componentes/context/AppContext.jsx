import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import {getItem} from '../fireStore/firebase'
  
const AppContext = createContext()

export const useAppContext = ()=> useContext(AppContext)

 const AppContextProvider = ({children}) => {
  const [producto, setProducto] = useState([])
  useEffect(() => {
    getItem().then((res)=> setProducto(res))
  })
  
  return (
    <>
      <AppContext.Provider value={{producto}}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider