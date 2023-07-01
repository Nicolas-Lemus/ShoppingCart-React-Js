import React, {useState} from 'react'
import { doc,getDoc,getFirestore ,updateDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import DotSpinner from '../../animations/DotSpinner ';
import "./ModifyProducts.css"

        const ModifyProducts = () => {
            const [category, setCategory] = React.useState();
            const [description, setDescription] = React.useState();
            const [images, setImages] = React.useState();
            const [stock, setStock] = React.useState();
            const [title, setTitle] = React.useState();
            const [previous_price, setPrevious_price] = React.useState();
            const [price, setPrice] = React.useState();
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(false);
            const [productData, setProductData] = React.useState();
        
            const { productsID } = useParams();
        
            React.useEffect(() => {
            const db = getFirestore();
        
            const tecnologia = doc(db, "Tecnologia", productsID);
            getDoc(tecnologia)
                .then((snapshot) => {
                setProductData({ id: snapshot.id, ...snapshot.data() });
                })
                .catch(() => setError(true))
                .then(() => setLoading(false));
            }, [productsID]);
        
            const handleCategoryChange = (e) => {
            setCategory(e.target.value);
            };
        
            const handleDescriptionChange = (e) => {
            setDescription(e.target.value);
            };
        
            const handleImagesChange = (e) => {
            setImages(e.target.value);
            };
        
            const handleStockChange = (e) => {
            setStock(e.target.value);
            };
        
            const handleTitleChange = (e) => {
            setTitle(e.target.value);
            };
        
            const handlePreviusChange = (e) => {
            setPrevious_price(e.target.value);
            };
        
            const handlePriceChange = (e) => {
            setPrice(e.target.value);
            };

            const handleSubmit = () => {
            const newProduct = {
                category,
                description,
                images,
                title,
                stock,
                previous_price,
                price,
            };
            const db = getFirestore();
            const updateProductsCollection = doc(db, "Tecnologia", productsID);
            updateDoc(updateProductsCollection, newProduct)
                .then(() => console.log("Product updated successfully"))
                .catch((error) => console.error("Error updating product:", error));
            };

        return (
            <div>
            {loading ? (
                <DotSpinner/>
            ) : error ? (
                <div>Error</div>
            ) : (
                <div className='inputs'>
                <input
                    type="text"
                    onChange={(e) => handleCategoryChange(e)}
                    placeholder='Categoria'
                />
                <input
                    type="text"
                    onChange={(e) => handleDescriptionChange(e)}
                    placeholder="Descripcion"
                />
                <input
                    type="text"
                    onChange={(e) => handleImagesChange(e)}
                    placeholder='Imagen'
                />
                <input
                    type="text"
                    onChange={(e) => handleStockChange(e)}
                    placeholder='Stock'
                />
                <input
                    type="text"
                    onChange={(e) => handleTitleChange(e)}
                    placeholder='Titulo'
                />
                <input
                    type="number"
                    onChange={(e) => handlePreviusChange(e)}
                    placeholder='Precio Previo'
                />
                <input
                    type="number"
                    onChange={(e) => handlePriceChange(e)}
                    placeholder='Precio'
                />
                <button className='buttonModify' onClick={handleSubmit}>Modificar Producto</button>
                </div>
            )}
            </div>
        );
    }
export default ModifyProducts