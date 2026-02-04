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



module.exports = { addBlog };