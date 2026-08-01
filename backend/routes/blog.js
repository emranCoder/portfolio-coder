const express = require('express');
const router = express.Router();
const {addBlog,getBlog,getBlogs,updateBlog,deleteBlog} = require('../controller/blogController');



router.post('/', addBlog);
router.get('/all', getBlogs);
router.get('/:id',getBlog);
router.put('/', updateBlog);
router.delete('/', deleteBlog);

module.exports = router;