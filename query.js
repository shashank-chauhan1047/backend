
import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Server</h1>");
})

// query parameter 
// http:localhost:3000/profile?key=value;
// http:localhost:3000/profile?key=value&key=value;

// app.get('/profile',(req,res)=>{
//     const {username,age} = req.query;
//     res.send("<h1>this is the profile page of</h1> "+username+" "+age);
//     console.log(username);
// })

// paras : http:localhost:3000/profile/id

app.get('/profile/:id/:username',(req,res)=>{
    const{id,username}=req.params;
    res.send("profile page of id no : "+id+" "+username);
    console.log(id+" "+username);
})

app.listen(3000,(req,res)=>{
    console.log("server started");
})

