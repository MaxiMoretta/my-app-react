import carrito from '../Img/carro-de-la-carretilla.png';
import '../NavBar/style.css';
import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <img src={carrito} className="navbar-carrito"></img>
        <span className='nav-contador'>0</span>
      </Link>
    </div>
  )
}

export default CartWidget