const express = require("express");
const path = require("path");
const adminData = require("./admin");

const rootDirectory = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // added hasProduct, productCSS and activeShop for handlebar
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
