const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = Schema({
    username:String,
    password:String
})
const Users = mongoose.model('user',userSchema);
module.exports = Users;
