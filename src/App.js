import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

   return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer className="greeting-container" greeting="Tienda de vehículos coleccionables"/>
{/*       <ItemCount  stock={5} initial={1} onAdd={console.log()} /> */}
      </header>      
    </div>
  );
}

export default App;
