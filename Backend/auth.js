const jwt=require('jsonwebtoken');
const Users=require('./schema');
require('dotenv').config();
const auth = async (req, res, next) => {
    try {
        const token =req.cookies.jwt;
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const user=await Users.findOne({_id:decode._id,'tokens.token':token});
        if(!user){
            throw new Error();
        }
        req.token=token;
        req.user=user;
        next();
    }
    catch (e) {
        res.status(401).send({error:'Please Authanticate'})
    }
}

module.exports = auth;