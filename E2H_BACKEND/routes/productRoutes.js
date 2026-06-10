const express = require('express');
const router = express.Router();
const {getProducts, getProductById, createProduct, editProduct, deleteProduct} = require("../controllers/productController");

router.get('/', getProducts);
router.post('/addProduct', createProduct);
router.put('/editProduct/:id', editProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/:id', getProductById);

module.exports = router;
