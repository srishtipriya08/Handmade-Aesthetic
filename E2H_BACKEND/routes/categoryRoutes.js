const express = require('express');
const router = express.Router();
const {getCategory , createCategory, getCategoryWithProducts } = require("../controllers/categoryController");

router.get('/', getCategory);
router.get('/:id', getCategoryWithProducts);
router.post('/addCategory', createCategory);

module.exports = router;