import './style.css';
import logo from '../Img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
         <div className="navbar-container">
            <img src={logo} className="navbar-logo" />
            <div className="navbar-menu">
                <ul>
                    <li><a className="nav-item" href="#">Autos</a></li>
                    <li><a className="nav-item" href="#">Quienes somos</a></li>
                    <li><a className="nav-item" href="#">Novedades</a></li>
                    <li><a className="nav-item" href="#">Contacto</a></li>
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