const mongoose = require('mongoose');

//Define the Mongodb Connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

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