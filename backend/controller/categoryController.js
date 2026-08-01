const Category = require("../models/category");

const addCategory = async (req, res) => {
  try {
    let categoryData = req.body;

    const newCategory = new Category(categoryData);
    const addCategory = await newCategory.save();

    if (!addCategory) {
      return res.res.status(404).send({ err: "Unable to add Category!" });
    }

    res
      .status(200)
      .json({ message: "Category added Successfully!", id: addCategory._id });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).send({ err: "Unable to find Category!" });
    }

    res.status(200).json({ category: category });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      return res.status(404).send({ err: "Unable to Find Categories!" });
    }

    res.status(200).json({ categories: categories });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id, ...bodyData } = { ...req.body };

    let newData = bodyData;
    const category = await Category.findByIdAndUpdate(id, newData);

    if (!category) res.status(400).send({ err: "Unable to Update Data!" });
    res.status(200).json({ message: "You got an update!", data: category });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad Request!",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.body.id;
    const category = await Category.findByIdAndDelete(id);

    if (!category) res.status(400).send({ err: "Unable to delete data!" });

    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad Request!",
    });
  }
};

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
