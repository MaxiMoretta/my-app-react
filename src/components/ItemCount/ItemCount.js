import { useEffect } from 'react'
import '../NavBar/style.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {

     const [contador, setContador] = useState (initial)  
     
  const sumar = () => {
    setContador(contador + 1 )
  }
  const restar = () => {
    setContador(contador - 1)
  }
  
    return (
    <div className="Item-Count">
          <h4 className="text-card">
           Vas a agregar al carrito 
          </h4>
          <div className="btn-card">
            <button className="btn-card-btn" onClick={sumar}>+</button>
            {contador <= stock && contador >= initial ? <div className="nm-contador">{contador}</div> : null }
            <button className="btn-card-btn" onClick={restar}>-</button>
          </div>  
          <button className="btn-agregar" onClick={()=>onAdd(contador)}>Agregar</button>
        </div>
  )
  
 }  

 /* const ItemCount = ({ numero }) => {

    useEffect(() => {
 /*    <div className="Item-Count">
    <h2>
        Has agregado el carrito 
    </h2>
    </div> */
/*  },[numero])
} */ 
 export default ItemCount