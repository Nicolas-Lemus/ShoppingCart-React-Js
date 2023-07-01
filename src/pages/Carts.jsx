import React, {useContext } from 'react'
import Headers from '../components/Headers/Headers'
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CardContext } from "../context/CartContext";
import CartDetailCard from '../components/CartDetailCard/CartDeatilCard';


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

  return Tecnologia.filter((product) => product !== null);
};

const Carts = () => {
    const [error, setError] = React.useState(false);
    const [productsData, setProductsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    const { count } = useContext(CardContext);
  
    console.log(count);
  
    React.useEffect(() => {
      const ids = count.Tecnologia.map((product) => product.productid);
      fetchProductsByIds(ids)
        .then((res) => {
          setProductsData(res);
        })
        .catch((err) => setError(err))
        .then(() => setLoading(false));
    }, [count]);
  
    return loading ? (
      <div>nada</div>
    ) : (
      <div>
        <Headers HeadersH1={"Cart"} />
        <div>
          {productsData.map((product) => (
            <CartDetailCard
              key={product.id}
              Tecnologia={product}
              qty={count.Teacnologia && count.Tecnologia.find((item) => item.productid === product.id)}
          />
          ))}
        </div>
      </div>
    );
  };
export default Carts;
