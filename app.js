const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/*
  Allow us to set any values 
  globally on our express application
  Format: 

  app.set('title', 'value');

  Can get it with app.get()
*/
// used to notify engine being used
app.set("view engine", "pug");
// use to notify where can we find the template
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views/404.html"));
});

app.listen(3000);
