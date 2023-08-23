const mongoose = require('mongoose');
const {Schema} = mongoose;
const jwt=require('jsonwebtoken');

const userSchema = Schema({
    username:String,
    password:String,
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
userSchema.methods.createAuthToken=async function(){
    const user=this;
    console.log("creating token");
    const token=jwt.sign({_id:user._id.toString()},"jeetoza");
    console.log(token);
    user.tokens=user.tokens.concat({token:token});//.concat combines two or more array
    console.log(user);
    await user.save();
    return token;
}
const Users = mongoose.model('user',userSchema);
module.exports = Users;
