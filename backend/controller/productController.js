const Product = require('../models/product');

const addProduct = async (req, res,) => {
    try {

        let productData = req.body;
        const newProduct = new Product(productData);
        const addProduct = await newProduct.save();

        if (!addProduct) { return res.res.status(404).send({ err: "Unable to add product!" }); }

        res.status(200).json({ message: "Product added Successfully!", id: addProduct._id });


    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: "Bad request!"
        });
    }
}

const getProduct = async (req, res,) => {
    try {

        const products = await Product.find();

        if (!products) { return res.res.status(404).send({ err: "Unable to Find Product!" }); }

        res.status(200).json({ products: products });


    } catch (error) {
        console.log(error)
        res.status(500).send({
            err: "Bad request!"
        });
    }
}


const updateProduct = async (req, res) => {
    try {
        const { id, ...bodyData } = { ...req.body };

        let newData = bodyData;
        const product = await Product.findByIdAndUpdate(id, newData);

        if (!product) res.status(400).send({ err: "Unable to Update Data!" });

        res.status(200).json({ message: "You Got An Update!", data: product });



    } catch (error) {
        console.log(error);
        res.status(500).send({
            err: "Bad Request!"
        })
    }
}



const deleteProduct = async (req, res) => {
    try {

        const id = req.body.id;

        const product = await Product.findByIdAndDelete(id);

        if (!product) res.status(400).send({ err: "Unable to Update Data!" });

        res.status(200).json({ message: "Deleted Successfully!" });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            err: "Bad Request!"
        })
    }
}










module.exports = { addProduct, getProduct, updateProduct, deleteProduct };