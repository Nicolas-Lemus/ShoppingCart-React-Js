import React, { useContext,useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { CardContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const { count } = useContext(CardContext);
  useEffect(() => {
    setQty(count.Tecnologia.reduce((total, product) => total + product.qty, 0));
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