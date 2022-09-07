import './Item.css'
import  ItemCount from '../ItemCount/ItemCount'

const Item = ({ id, marca, modelo, año, img, precio, stock}) => {
  return (
    <div className="item-card">
        <img className='img-card' src={img} alt={""}/>
        <h3 className="item-title">{modelo}</h3>
        <h4 className="item-año">Año: {año}</h4>
        <p className="item-marca">Marca: {marca}</p>
        <p className="item-precio">Precio: {precio}</p>
        <p className="item-stock">{stock}</p>
        <p className="item-id">{id}</p>
        <ItemCount stock={stock} initial={1} onAdd={console.log()}/>
    </div>
  )
}

export default Item;