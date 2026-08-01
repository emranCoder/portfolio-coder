const Blog = require('../models/blog')


const addBlog = async (req, res) => {
    try {
        let blogData = req.body;
        const newBlog = new Blog(blogData);
        const addBlog = await newBlog.save();


        if (!addBlog) { return res.res.status(404).send({ err: "Unable to add Post the blog!" }); }

        res.status(200).json({ message: "Post sent Successfully!", id: addBlog._id });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: "Bad request!"
        });
    }
}


const getBlog = async (req, res) => {
    try {
        const id = req.params.id;

        const blogs = await Blog.findById(id);

        if (!blog) { return res.res.status(404).send({ err: "Unable to find the blog!" }); }

        res.status(200).json({ blogs: blog });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: "Bad request!"
        });
    }
}

const getBlogs = async (req, res,) => {
    try {

        const blogs = await Product.find();
        blogs
        if (!blogs) { return res.res.status(404).send({ err: "Unable to Find Blogs!" }); }

        res.status(200).json({ blogs: blogs });

        blogs
    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: "Bad request!"
        });
    }
}


const updateBlog = async (req, res) => {
    try {
        const { id, ...bodyData } = { ...req.body };

        let newData = bodyData;
        const blog = await Product.findByIdAndUpdate(id, newData);

        if (!blog) res.status(400).send({ err: "Unable to Update Data!" });

        res.status(200).json({ message: "You Got An Update!", data: blog });



    } catch (error) {
        console.log(error);
        res.status(500).send({
            err: "Bad Request!"
        })
    }
}


const deleteBlog = async (req, res) => {
    try {

        const id = req.body.id;

        const blogs = await Product.findByIdAndDelete(id);

        if (!blogs) res.status(400).send({ err: "Unable to Delete Data!" });

        res.status(200).json({ message: "Deleted Successfully!" });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            err: "Bad Request!"
        })
    }
}









module.exports = { addBlog, getBlog, getBlogs, updateBlog, deleteBlog };