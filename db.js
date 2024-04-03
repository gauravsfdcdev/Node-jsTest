const mongoose = require('mongoose');
require('dotenv').config();
//Define the Mongodb Connection url
//const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = 'mongodb+srv://gauravkumar:jCEw6guPmCo1wsJI@cluster0.rhyve93.mongodb.net/';
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('connected to mongodb server',err);
});

db.on('disconnected',()=>{
    console.log('disconnected');
});

module.exports = db;