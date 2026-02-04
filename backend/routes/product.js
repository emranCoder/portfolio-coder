const express = require('express');
const router = express.Router();
const { addProduct, getProducts, updateProduct, deleteProduct, getProduct } = require('../controller/productController');


router.post('/', addProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;