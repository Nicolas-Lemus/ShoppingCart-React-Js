import React, {useContext } from 'react'
import Headers from '../components/Headers/Headers'
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import CartDetailCard from '../components/CartDetailCard/CartDeatilCard';
import  DotSpinner  from '../animations/DotSpinner ';


const fetchProductsByIds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "Tecnologia"), id));
  
    const productSnapshots = await Promise.all(
      productRefs.map((productRef) => getDoc(productRef))
    );



const Tecnologia = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });

  return Tecnologia.filter((producto) => producto !== null);
};

const Cart = () => {
    const [error, setError] = React.useState(false);
    const [productsData, setProductsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    const { count } = useContext(CartContext);
  
    console.log(count);
  
    React.useEffect(() => {
      const ids = count.Tecnologia.map((producto) => producto.productid);
      fetchProductsByIds(ids)
        .then((res) => {
          setProductsData(res);
        })
        .catch((err) => setError(err))
        .then(() => setLoading(false));
    }, [count]);
  
    return loading ? (
      <DotSpinner/>
    ): error ? (
      <div>algo salio mal</div>
    ): (
      <div>
        <Headers HeadersH1={"Cart"} />
        <div>
          {productsData.map((producto) => (
            <CartDetailCard
              key={producto.id}
              Tecnologia={producto}
              qty={count.Tecnologia &&  count.Tecnologia.find((item) => item.productoid === producto.id)}
          />
          ))}
        </div>
      </div>
    );
  };
export default Cart;
