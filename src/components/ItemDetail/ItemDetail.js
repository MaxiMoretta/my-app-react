import './ItemDetail.css';
import  ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState (0);
   
    const onAdd =(contador)=>{
        console.log("click", contador)
        setCount(contador)
        addItem(item, contador)
    }

    return(
        <div className='detail-container'>
            <h3>Detalle de producto</h3>
            <div className='img-container'>
                <img src={item.img} alt={""}/>
            </div>
            <div>
                <h4>{item.modelo}</h4>
                <h5>{item.precio}</h5>
                <h5>Agregaste al carrito: {count}</h5>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}
