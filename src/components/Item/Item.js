import './Item.css'
import  ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';

const Item = ({ id, marca, modelo, año, img, precio, stock, categoria}) => {
  return (
    <div className="item-card">
        <img className='img-card' src={img} alt={""}/>
        <h3 className="item-title">{modelo}</h3>
        <p className="item-año">Año: {año}</p>
        <p className="item-marca">Marca: {marca}</p>
        <h4 className="item-precio">Precio: {precio}</h4>
        {console.log(id)}
        <Link to={`/item/${id}`}>
                <button className='btn-ver'>Ver detalle</button>
        </Link>
        <ItemCount stock={stock} initial={1} onAdd={console.log()}/>
    </div>
  )
}

export default Item;