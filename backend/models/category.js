const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,

    },
     parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },

    image:{
        type: String,
        default: "",
    },
    isActive:{
        type: Boolean,
        default: true,
    },
},
{
    timeseries: true,
}
)


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;




