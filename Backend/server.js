const express = require('express');
const app = express();
const path=require('path');
const mdb = require('./db');
const Users = require('./schema');
const Notes = require('./noteSchema');

const bp = require('body-parser');
app.use(bp.urlencoded({extended : true})); // when post req is triggered using form
app.use(express.json()); // when post req is triggered without using form

mdb();
app.get('/homepage',(req,res)=>{
    res.render('homepage');
})
app.post('/signup',(req,res)=>{
    var data = Users(req.body);
    data.save();
    res.redirect('/login');
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

app.get("*",(req,res)=>{
    res.send("chal bhag");
})

app.delete('/api/delete/:id',(req,res)=>{
    Notes.deleteOne({_id:req.params.id},(err,data)=>{
        res.send();
    });
})

app.listen(8000,()=>{
    console.log("server is running on http://localhost:8000");
})
