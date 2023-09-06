import React, { useState, useEffect, useCallback } from 'react';
import './style.css';
import axios from 'axios';
import debounce from 'lodash/debounce';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch the list of products from your backend
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Define a debounce function to delay the search
    const delayedSearch = useCallback(debounce((value) => {
        axios.get(`http://localhost:5000/api/products?query=${value}`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error searching products:', error);
            });
    }, 300), []);

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        delayedSearch(value);
    };

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>
            <div className="product-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Description: {product.description}</p>
                        <a href={`/product/${product.id}`}>View Details </a>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductList;
