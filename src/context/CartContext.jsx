import React , { useState , createContext} from 'react';


export const CardContext = createContext();

export const CartProviden = ({children}) => {
    
    const [count,setCount]= useState({ qtyItems: 0, Tecnologia: []});

    return (
        <CardContext.Provider
         //DEBEMOS PASARLO COMO UN ARRAY  {[]}
            value={{count,setCount}}
            >{children}
        </CardContext.Provider>
    )
};

