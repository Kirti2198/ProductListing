const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const port = 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// Use the cors middleware to enable cross-origin requests
app.use(cors());

// Use the productRoutes for product-related routes
app.use('/', productRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
