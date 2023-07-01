import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CartContext";
import "./CardButtons.css"

const CartButtons = ({ customStyle, productid }) => {
  const [state, setState] = useState(1);
  const { count, setCount } = useContext(CardContext);
  const handleMoreClick = () => {
    setState(state + 1);
  };

  const handleLessClick = () => {
    setState(state - 1);
  };

  const addToCart = () => {
    const existingProduct = count.Tecnologia.find(
      (p) => p.productid === productid
    );
    if (existingProduct) {
      existingProduct.qty += state;
    } else {
      const newProduct = {
        productid,
        qty: state,
      };
      setCount((prevState) => ({
        qtyItems: prevState.qtyItems + state,
        Tecnologia: [...prevState.Tecnologia, newProduct],
      }));
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="w-25">
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleLessClick}
        > 
        -
        </Button>
        <span className="spamPrecio">{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleMoreClick}
        >
        +
        </Button>
      </div>
      <Button className="ml-2" variant={customStyle}
      onClick={addToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
