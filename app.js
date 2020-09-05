const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const expressHandleBar = require("express-handlebars");

/*
  Setting up Handle Bars Template Engine
  Pug Temlate was installed in NodeJS internally
  so we just need to run app.set()

  For Handle bar, it is not installed internally
  in NodeJS so we have to run app.engine()
*/
app.engine("handlebars", expressHandleBar());
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
