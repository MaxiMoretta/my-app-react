/* import './ItemDetailContainer.css'; */
import '../NavBar/style.css'
import { useParams } from "react-router-dom";
import data from '../ItemListContainer/mock-data'
import { useState, useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = data.find(item=>item.id === parseInt(id));
            resolve(item)
            console.log(id)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[productId])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}