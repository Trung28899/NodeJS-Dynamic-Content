const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const expressHandleBar = require("express-handlebars");

/*
  EJS is internally installed with NodeJS

  EJS template use html + JS with some internal syntax 
*/
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log("got in here");
  res
    .status(404)
    .render("404", { pageTitle: "Page Not Found", path: "/notFound" });
});

app.listen(3000);
