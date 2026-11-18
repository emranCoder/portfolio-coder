const express = require("express");
const router = express.Router();
const {
  addPage,
  getPages,
  updatePage,
  deletePage,
  getPage,
} = require("../controller/pageController");

router.post("/", addPage);
router.get("/all", getPages);
router.get("/:id", getPage);
router.put("/", updatePage);
router.delete("/", deletePage);

module.exports = router;
