const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    badges: {
        tag: Array,
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;