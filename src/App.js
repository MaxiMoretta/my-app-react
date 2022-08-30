import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react'; 


function App() {
  const [contador, setContador] = useState (0)  
  const sumar = () => {
    setContador(contador + 1 )
  }
  const restar = () => {
    setContador(contador - 1)
  }
   return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer className="greeting-container" greeting="Tienda de vehículos coleccionables"/>
      <ItemCount  numero={contador}/>
        <div className="Item-Count">
          <h3 className="text-card">
           Vas a agregar al carrito 
          </h3>
          <div className="btn-card">
            <button className="btn-card-btn" onClick={sumar}>+</button>
            {contador <= 5 ? <div className="nm-contador">{contador}</div> : "sin stock"}
            <button className="btn-card-btn" onClick={restar}>-</button>
          </div>  
          <button className="btn-agregar">Agregar</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
