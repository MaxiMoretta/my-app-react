import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext()

export const CartProvider =({children})=>{
    const [ProductCartList, setProductCartList] = useState([])
    
    const addItem = (Item, quantity)=>{
            const newProduct ={
                ...Item,
                quantity
            }
    const newListado = [...ProductCartList];
    newListado.push(newProduct);
    setProductCartList(newListado);
    }

    const removeItem = (ItemId)=>{
        const newListado = ProductCartList.filter(product=>product.id !== ItemId);
       setProductCartList(newListado);
    }

/*     const clear = ()=>{
        const newEliminado = ProductCartList([]);
       setProductCartList(newEliminado);
    } 
 */
return(
    <CartContext.Provider value={{ProductCartList, addItem, removeItem, /* clear */ }}>
        {children}
    </CartContext.Provider>
)

}