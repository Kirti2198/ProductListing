const { products } = require('../utils/data');

const getProducts = (req, res) => {
    const searchQuery = req.query.query;

    if (!searchQuery) {
        return res.json(products);
    }
    const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    res.json(searchResults);
};

const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (!product) {
        // Product not found
        res.status(404).json({ message: 'Product not found' });
    } else {
        // Return the product details
        res.json(product);
    }
};

module.exports = {
    getProducts,
    getProductById,
};
