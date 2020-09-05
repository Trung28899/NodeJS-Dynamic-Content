const express = require("express");
const path = require("path");
const adminData = require("./admin");

const rootDirectory = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // Getting products from admin
  const products = adminData.products;
  /*
    passing data into template. 
    In the Pug file now we can use 
    prods and docTitle variables 

    NOTE: in pug file: 
      - #{} Allow you to use variable
      - Notice the conditional statement 
        and Iteration
  */
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
