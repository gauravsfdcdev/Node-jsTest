const express = require("express");
const app = express();
const db = require("./db");

require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;



app.get("/", function (req, res) {
  res.send("welcome to hotel");
});





//import the router files for personroutes
const personRoutes = require('./routes/personRoute');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);





app.listen(PORT, () => {
  console.log("listening on port 3000");
});
