import React from "react";

const CartDetailCard = ({ product, qty }) => {
  return (
    <div >
        <div >
          <div >
            <h2>{product.Title}</h2>
            <p>{product.Description}</p>
            {/* <p>Precio: ${product.precio}</p> */}
            <p>Cantidad:{qty}</p>
          </div>
        </div>
    </div>
  );
};

export default CartDetailCard;