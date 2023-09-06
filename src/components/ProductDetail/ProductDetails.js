import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        // Fetch the list of products from your backend
        axios.get(`http://localhost:5000/api/product/${productId}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="product-container">
            <div key={product?.id} className="product-card">
                <img src={product?.imageUrl} alt={product?.name} />
                <h2>{product?.name}</h2>
                <p>Price: ${product?.price?.toFixed(2)}</p>
                <p>Description: {product?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
