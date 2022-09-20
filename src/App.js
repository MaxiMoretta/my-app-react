import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer' ;
import { CartProvider } from './context/CartContext';

function App() {

   return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <h1 className="Title-App">Modelos de colección</h1>
          <header className="App-header">         
            <Routes>
              <Route path="/" element={<ItemListContainer className="greeting-container" greeting="Tienda de vehículos coleccionables" />}/>
              <Route path="/coleccion" element={<ItemListContainer/>}/>
              <Route path="/coleccion/:categoryId" element={<ItemListContainer/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
            </Routes>   
          </header>   
        </div>
      </BrowserRouter>
    </CartProvider>);
}
 
export default App;
