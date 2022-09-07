import Item from "../Item/Item";

const ItemList = ({itemList}) => {   
  return (
    <> 
        {itemList.map((producto) =>  {
        return  (
        <Item 
        key={producto.id}
        nombre={producto.nombre}
        modelo={producto.modelo}
        marca={producto.marca}
        año={producto.año}
        img={producto.img}
        precio={producto.precio}
        />);})}
    </>
  )
}

export default ItemList