const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const passport = require('./auth');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;



//middleware functions for the logging functionalities fg
const logRequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()} request made to :  ${req.originalUrl}`);
  // console.log(`${new Date().toLocaleString()} request made to :  ${req.originalUrl}`);
  next();
}
app.use(logRequest);





app.use(passport.initialize());
const localAuthMiddleware =  passport.authenticate('local',{session:false});

app.get("/",localAuthMiddleware, function (req, res) {
  res.send("welcome to hotel");
});



//import the router files for personroutes
const personRoutes = require('./routes/personRoute');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',localAuthMiddleware,personRoutes);
app.use('/menu',menuItemRoutes);





app.listen(PORT, () => {
  console.log("listening on port 3000");
});
