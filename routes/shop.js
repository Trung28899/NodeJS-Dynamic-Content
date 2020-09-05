const express = require("express");
const path = require("path");
const adminData = require("./admin");

const rootDirectory = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // getting data from admin
  console.log(adminData.products);
  res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

module.exports = router;
