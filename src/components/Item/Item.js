import './Item.css'
import  ItemCount from '../ItemCount/ItemCount'

const Item = ({ id, marca, modelo, año, img, precio, stock}) => {
  return (
    <div className="item-card">
        <img className='img-card' src={img} alt={""}/>
        <h3 className="item-title">{modelo}</h3>
        <p className="item-año">Año: {año}</p>
        <p className="item-marca">Marca: {marca}</p>
        <h4 className="item-precio">Precio: {precio}</h4>
        <p className="item-id">{id}</p>
        <ItemCount stock={stock} initial={1} onAdd={console.log()}/>
        {console.log(stock)}
    </div>
  )
}

export default Item;