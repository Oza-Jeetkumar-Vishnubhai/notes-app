const mongoose = require('mongoose');
const uri = 'mongodb+srv://JeetOza:JeetOza@cluster0.xfxha.mongodb.net/notesApp';

const connectToMongo = ()=>{
    mongoose.connect(uri,(err)=>{
        if(err)
            console.log(err)
        console.log("Connected to mongodb successfuly");
    });    
};

module.exports = connectToMongo;
