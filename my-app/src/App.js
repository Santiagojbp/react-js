
import React from 'react'
import NavBar from './Componentes/Nav-Bar'
import './App.css';
import Productos from './Componentes/Productos';
import inventario from './Componentes/data/inventario';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Productos />
    </React.Fragment>
  );
}

export default App;
