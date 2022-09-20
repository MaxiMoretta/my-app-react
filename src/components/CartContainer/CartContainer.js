import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {ProductCartList, removeItem, clear} = useContext(CartContext)
    return (
      <div>
        <h2>Carrito</h2>
            <div>
            {ProductCartList.map(item=>(
             <>
             <p>{item.modelo} - {item.quantity}</p>
             <button onClick={()=>removeItem(item.id)}>eliminar</button>
             </>
                    ))}
            </div>
            <button onClick={()=>clear(ProductCartList)}>Eliminar todo</button>
      </div>
    )
  }
  
  export default CartContainer