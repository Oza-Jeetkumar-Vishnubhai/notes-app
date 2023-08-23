const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGOURI;

const connectToMongo = ()=>{
    mongoose.connect(uri,(err)=>{
        if(err)
            console.log(err)
        console.log("Connected to mongodb successfuly");
    });    
};

module.exports = connectToMongo;
