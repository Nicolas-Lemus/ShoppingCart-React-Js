import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DotSpinner from '../../animations/DotSpinner ';
import {doc,getDoc,getFirestore} from "firebase/firestore"
import CardButtons from '../CardButtons/CardButtons';

const ItemDetailContainer = () => {
  const [productsData, setProductsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);

  
  const { productsID} = useParams();
  
  useEffect(() => {

    const db = getFirestore();

    const tecnologia = doc(db, "Tecnologia", productsID)
    getDoc(tecnologia)
    .then((snapshot) => {
    setProductsData({ id: snapshot.id, ...snapshot.data() });
    })
    .catch(()=> setError(true))
    .then(()=> setLoading(false));
}, [productsID]);

console.log(productsData)
  
  return loading ? (
    <DotSpinner/>
  ) : error ? (
    <div>Error</div>
  ):(
    <div className="divPadre">
      <div className="Cards">
        <div key={productsData.id} className="Card">
          <div className="Title">{productsData.title}</div>
          <div className="Images">
          <img src={productsData.images} alt="productos-disponibles"/>
          </div>
        </div>
      </div>
      <div className="Description"><h2>Descripcion</h2>{productsData.description}
      <div className="Previous">{productsData.previous_price}</div>
          <div className="Price">${productsData.price}</div>
          <div className="Stock">{productsData.stock}</div>
        <CardButtons/>
      </div>
    </div>
  );
};
export default ItemDetailContainer;