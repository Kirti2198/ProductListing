// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define your API routes
router.get('/api/products', productController.getProducts);
router.get('/api/products/:id', productController.getProductById);

module.exports = router;
