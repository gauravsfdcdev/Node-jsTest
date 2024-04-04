const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

//passport verifications strategy for the userlogin and passport
passport.use(new LocalStrategy(async (USERNAME, password, done)=>{
    try {
      //authentication logic here
      
      const user = await Person.findOne({username:USERNAME});
      if(!user)
        return done(null,false, {message:"Incorrect username." });
  
     // const isPasswordMatch = user.password === password ? true : false;
      const isPasswordMatch = await user.comparePassword(password);
      
      if(isPasswordMatch){
        return done(null,user);

      }else{
        return done(null,false, {message:"Incorrect  password."});
      }
  
    }catch (error) {
      return done(error);
    }
  }))
  
module.exports = passport; //Export configured passport