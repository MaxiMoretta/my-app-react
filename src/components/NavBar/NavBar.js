import './style.css';
import logo from '../Img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
         <div className="navbar-container">
         <Link to="/">
         <img className="navbar-logo" src={logo} alt="logo"/>
         </Link>
            <div className="navbar-menu">
                <ul>
                    <li><NavLink className="nav-item" to="/">Colección</NavLink></li>
                    <li><NavLink className="nav-item" to="/contacto">Contacto</NavLink></li>
                    <li><NavLink className="nav-item" to="/coleccion/autos">Autos</NavLink></li>
                    <li><NavLink className="nav-item" to="/coleccion/motos">Motos</NavLink></li>
                    <li><NavLink className="nav-item" to="/coleccion/camionetas">Camionetas</NavLink></li>
                </ul>
            </div>
            <div className="navbar-login-container">
                <button className="nav-btn"><a className="nav-btn-text" href="#">Ingresar</a></button>
                <CartWidget/>
            </div>
         </div>
    )

}

export default NavBar;