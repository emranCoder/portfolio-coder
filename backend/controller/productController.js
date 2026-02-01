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

        let get = req.body;
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

module.exports = { addProduct, getProduct };