import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Headers from '../components/Headers/Headers'

const Item = () => {
  return (
    <div>
      <Headers HeadersH1="Detalles del Producto"/>
      <ItemDetailContainer/>
    </div>
    
  )
}

export default Item