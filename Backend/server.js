const express = require('express');
const app = express();
const path=require('path');
const mdb = require('./db');
const Users = require('./schema');
const Notes = require('./noteSchema');
const bp = require('body-parser');
const cookieParser = require("cookie-parser");
const jwt=require('jsonwebtoken');

app.use(bp.urlencoded({extended : true})); // when post req is triggered using form
app.use(express.json()); // when post req is triggered without using form
app.use(express.static(path.join(__dirname,'build')))
app.set('view engine','ejs');
app.use(cookieParser());

mdb();

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.get('/verify',async (req,res)=>{
    try {
        const token =req.cookies.jwt;
        const decode=jwt.verify(token,JWT_SECRETE);
        const user=await Users.findOne({_id:decode._id,'tokens.token':token});
        if(!user){
            throw new Error();
        }
        res.send({
            token:token,
            user:user
        })
    }
    catch (e) {
        res.status(401).send({error:'Please Authanticate'})
    }
})

app.post('/signup',async (req,res,next)=>{
    try{
        var data = new Users(req.body);
        let token = await data.createAuthToken();
        console.log("authtoken created")
        res.cookie("jwt", token);
        res.redirect('/login');
    }
    catch(err)
    {
        next(err);
    }
});
app.get('/api/users/:username/:password',async (req,res)=>{
    Users.find({username:req.params.username,password:req.params.password},(err,data)=>{
        if(err)
            console.log(err);
        else
            res.send(data);
    })
})

app.post('/api/newnote',(req,res)=>{
    console.log(req.body);
    var notes = Notes(req.body);
    notes.save();
    res.send();
})

app.get('/api/savednote/:username/:password',(req,res)=>{
    Notes.find({username:req.params.username,password:req.params.password},(err,data)=>{
        console.log("abc",data);
        res.send(data);
    })
})

// app.get("*",(req,res)=>{
//     res.send("chal bhag");
// })

app.delete('/api/delete/:id',(req,res)=>{
    Notes.deleteOne({_id:req.params.id},(err,data)=>{
        res.send();
    });
})

app.listen(8000,()=>{
    console.log("server is running on http://localhost:8000");
})
