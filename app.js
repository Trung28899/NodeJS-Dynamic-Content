const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const expressHandleBar = require("express-handlebars");

/*
  Object within expressHandleBar is essential 

  layoutsDir: point to the directory of the layout

  defaultLayout: point to the file in the directory 
  that would be set as a default layout, will be applied
  for any page (not like pug which we extends it in pages
    that we want)

  extname: notify the extension name of the layout file
*/
app.engine(
  "handlebars",
  expressHandleBar({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "handlebars",
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
