import carrito from '../Img/carro-de-la-carretilla.png';
import '../NavBar/style.css';

const CartWidget = () => {
  return (
    <div>
    <img src={carrito} className="navbar-carrito"></img>
    <span className='nav-contador'>0</span>
    </div>
  )
}

export default CartWidget