import Item from "../Item/Item";

const ItemList = ({itemList}) => {   
  return (
    <> 
        {itemList.map((producto) =>  {
        return  (
        <Item
        id={producto.id}
        nombre={producto.nombre}
        modelo={producto.modelo}
        marca={producto.marca}
        año={producto.año}
        img={producto.img}
        precio={producto.precio}
        stock={producto.stock}
        categoria={producto.categoria}
        key={producto.id}
        />);})}
    </>
  )

}

export default ItemList