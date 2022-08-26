const BlogModel = require('../models/BlogModel');

const getBlogs = async (req, res)=>{
    const blogs = await BlogModel.find();
    res.status(200).json(blogs)
    console.log(blogs);
}

const createBlog = async (req, res)=>{
    // const {tag, title, msg} = req.body;
    const blog = new BlogModel(req.body)

    try {
        const result = await blog.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({"msg" : "Wrong in blog"})
    }
}

module.exports = {getBlogs, createBlog};