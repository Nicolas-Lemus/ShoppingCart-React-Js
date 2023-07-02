import React from "react";

const CartDetailCard = ({ producto, qty }) => {
  return (
    <div >
        <div >
          <div >
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            {/* <p>Precio: ${product.precio}</p> */}
            <p>Cantidad:{qty}</p>
          </div>
        </div>
    </div>
  );
};

export default CartDetailCard;