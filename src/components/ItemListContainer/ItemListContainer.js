import '../NavBar/style.css'
import data from './mock-data'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'; 

const ItemListContainer = ({greeting}) => {

const {categoryId} = useParams();
console.log('categoryId',categoryId)

  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

 useEffect(()=>{
    getData.then(resultado=>{
        if(categoryId){
            const newProducts = resultado.filter(items=>items.categoria === categoryId);
            setItems(newProducts)
        } else{
            setItems(resultado)
        }
    })
},[categoryId])

return (
  <>
  {items.length > 0 ? (
    <ItemList itemList={items}/>
  ) : (<div>Cargando...</div> 
      )}
      </>
);};

export default ItemListContainer;