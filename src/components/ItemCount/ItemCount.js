import { useEffect } from 'react'
import '../NavBar/style.css'

/* 
const ItemCount = ({contador}) => {
    const [container, setContador] = useState(0)

    const sumar = () => {
      setContador(contador + 1 )
    }
    const restar = () => {
      setContador(contador - 1)
    }
    console.log({container})  

    return (
    <div className="Item-Count">
        <h2>
            Has agregado el carrito 
        </h2>
 {/*        <div className="btn-card">
        <button className="btn-card-btn" onClick={Sumer}>+</button>
        {contador <= 5 && contador > -1 ? <div className="nm-contador">{contador}</div> : "sin stock"}
        <button className="btn-card-btn" onClick={restar}>-</button> 
            </div> }         
    </div>
  )
  
 }  */

 const ItemCount = ({ numero }) => {

    useEffect(() => {
 /*    <div className="Item-Count">
    <h2>
        Has agregado el carrito 
    </h2>
    </div> */
 },[numero])
}
 export default ItemCount