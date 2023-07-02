import React , { useState , createContext} from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [count,setCount]= useState({ qtyItems: 0, Tecnologia: []});

    return (
        <CartContext.Provider
            value={{count,setCount}}
            >{children}
        </CartContext.Provider>
    )
};

