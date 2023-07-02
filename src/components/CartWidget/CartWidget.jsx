import React, { useContext,useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const [qty, setQty] = useState(0);
  const { count } = useContext(CartContext);

  useEffect(() => {
    setQty(count.Tecnologia.reduce((total, producto) => total + producto.qty, 0));
  }, [count]);
  
  return (
    <div>
      <Link
        to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <span>{qty}</span>
    </div>
  );
};

export default CartWidget;