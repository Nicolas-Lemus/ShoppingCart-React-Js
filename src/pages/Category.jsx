import React, { useState, useEffect } from 'react';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from 'react-router-dom';
import DotSpinner from '../animations/DotSpinner ';


import {collection,getDocs,getFirestore} from "firebase/firestore"


const Category = () => {

    const [productsData, setProductsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);

    const {categoryid} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const Tecnologia = collection(db, "Tecnologia");
        getDocs(Tecnologia)
            .then((snapshot) => {
                const productsFilter = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                const filteredProducts = productsFilter.filter((producto) => producto.category === categoryid);

                setProductsData(filteredProducts);
            })
            .catch(() => setError(true))
            .then(() => setLoading(false));
    }, [categoryid]);
    return (
        <div>
        {loading ? (
                <DotSpinner/>
        ):error ? (
            <div>Error</div>
        ):(
            <div>
                <ItemListContainer productsData={productsData}/>
            </div>
            
        )}
        </div> 
    );
};

export default Category;