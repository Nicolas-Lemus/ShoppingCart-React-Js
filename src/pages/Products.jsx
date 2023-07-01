import React, {useState ,useEffect } from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {collection,getDocs,getFirestore} from "firebase/firestore"
import Headers from '../components/Headers/Headers';
import DotSpinner from '../animations/DotSpinner ';


const Products = () => {
    const [productsData,setProductsData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading]= useState(true);



    useEffect(()=>{

        const db = getFirestore();

        const tecnologia = collection(db, "Tecnologia")
        getDocs(tecnologia).then((snapshot) => {
        setProductsData(
            snapshot.docs.map((doc)=>({ id: doc.id, ...doc.data() }))
            );
        })
        .catch((error)=> setError(true))
        .then(()=> setLoading(false));
    }, []);

    return (
        <div>
        {loading ? (
            <DotSpinner/>
        ):error ? (
            <div>Error</div>
        ):(
            <div>
                <Headers/>
                <ItemListContainer productsData={productsData}/>
            </div>
            
        )}
        </div> 
    );
};

export default Products