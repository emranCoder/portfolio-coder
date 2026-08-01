const express = require('express');
const router = express.Router();

const {addCategory, getCategories,getCategory, updateCategory,deleteCategory} = require('../controller/categoryController');

router.post('/',addCategory);
router.get("/:id",getCategory);
router.get("/all",getCategories);
router.put("/",updateCategory);
router.delete("/",deleteCategory);



module.exports = router;