import React from 'react';
import './sass/style.scss'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AppContextProvaider from './Componentes/context/AppContext';
import {CartProvider} from './Componentes/context/CartContext'
import NavBar from './Componentes/pageUse/Nav-Bar';
import Footer from './Componentes/pageUse/Footer';
import ItemDetailConteiner from './Componentes/ItemDitails/ItemDetailConteiner';
import ItemListConteiner from './Componentes/Item/ItemListConteiner';
import Cart from './Componentes/Cart/Cart';



import FinalizarCompra from './Componentes/compra/FinalizarCompra';

function App() {
  return (
  <AppContextProvaider>
    <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListConteiner/>} greetings={"shop"}></Route>
              <Route path='/categoria/:categoriaId' element={<ItemListConteiner/> }greetings={"shop"}></Route>
              <Route path='/Item/:Id' element={<ItemDetailConteiner/>}></Route> 
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/terminar_compra' element={<FinalizarCompra/>}></Route>
             
              
            </Routes>
            <Footer/>
        </BrowserRouter>
    </CartProvider>
  </AppContextProvaider>  
  );
}

export default App;
