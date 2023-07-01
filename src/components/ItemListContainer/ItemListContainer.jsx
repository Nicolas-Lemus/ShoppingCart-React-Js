import React from 'react'
import './ItemListContainer.css';
import Card from "../Card/Card"
import Headers from '../Headers/Headers';



const itemListContainer = ({productsData}) => {
    return (
        <div>
            <Headers HeadersH1="Productos"/>
            <div className='divPadre'>
                {
                    productsData.map(producto =>{
                        return(
                            <Card key={producto.id} productsData={producto}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default itemListContainer