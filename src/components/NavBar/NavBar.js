import './style.css';
import logo from '../Img/logo.png';

const NavBar = () => {
    return(
         <div className="navbar-container">
            <img src={logo} className="navbar-logo" />
            <div className="navbar-menu">
                <ul>
                    <li><a className="nav-item" href="#">Autos</a></li>
                    <li><a className="nav-item" href="#">Condición</a></li>
                    <li><a className="nav-item" href="#">Ubicación</a></li>
                    <li><a className="nav-item" href="#">Marca</a></li>
                    <li><a className="nav-item" href="#">Precio</a></li>
                </ul>
            </div>
            <div>
                <button className="nav-btn"><a className="nav-btn-text" href="#">Ingresar</a></button>
            </div>
         </div>
    )

}

export default NavBar;