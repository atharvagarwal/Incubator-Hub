const express = require('express');
const BlogController = require('../Controller/BlogController');

const router = express.Router()


router.get('/blog', BlogController.getBlogs)
router.post('/createBlog', BlogController.createBlog)

module.exports = router;