const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(uri,(err)=>{
        if(err)
            console.log(err)
        console.log("Connected to mongodb successfuly");
    });    
};

module.exports = connectToMongo;
