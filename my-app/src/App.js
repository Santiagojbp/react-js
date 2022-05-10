
import React from 'react'
import NavBar from './Componentes/Nav-Bar'
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemListConteiner from './Componentes/ItemListConteiner';
import ItemDeatils from './Componentes/ItemDeatils';
import Cart from './Componentes/Cart';
import Footer from './Componentes/Footer';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}></Route>
        <Route path='/Item/:ItemId' element={<ItemDeatils/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
