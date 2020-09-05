const express = require("express");
const path = require("path");
const adminData = require("./admin");

const rootDirectory = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  /*
    This will use the default templating engine
    notified in app.js (app.set)to return the template

    This will also look into the folder views that 
    we notified in app.js (app.set) to return the template

    Also no need to render('shop.pug') since the system already 
    know the default engine
  */
  res.render("shop");
});

module.exports = router;
