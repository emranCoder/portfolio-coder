const Page = require("../models/page");

const addPage = async (req, res) => {
  try {
    let pageData = req.body;
    const newPage = new Page(pageData);
    const addPage = await newPage.save();

    if (!addPage) {
      return res.status(404).send({ err: "Unable to add page!" });
    }

    res
      .status(200)
      .json({ message: "Page added Successfully!", id: addPage._id });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const getPage = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const page = await Page.findById(id);

    if (!page) {
      return res.status(404).send({ err: "Unable to Find page!" });
    }

    res.status(200).json({ page: page });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const getPages = async (req, res) => {
  try {
    const pages = await Page.find();

    if (!pages) {
      return res.status(404).send({ err: "Unable to Find pages!" });
    }

    res.status(200).json({ pages: pages });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad request!",
    });
  }
};

const updatePage = async (req, res) => {
  try {
    const { id, ...bodyData } = { ...req.body };

    let newData = bodyData;
    const page = await Page.findByIdAndUpdate(id, newData);

    if (!page) res.status(400).send({ err: "Unable to Update Data!" });

    res.status(200).json({ message: "You Got An Update!", data: page });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad Request!",
    });
  }
};

const deletePage = async (req, res) => {
  try {
    const id = req.body.id;

    const page = await Page.findByIdAndDelete(id);

    if (!page) res.status(400).send({ err: "Unable to Delete Data!" });

    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: "Bad Request!",
    });
  }
};

module.exports = {
  addPage,
  getPage,
  getPages,
  updatePage,
  deletePage,
};
