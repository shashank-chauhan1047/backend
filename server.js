// import express from 'express';

// const app=express();

// const m1=(req,res,next)=>{
//     console.log("running middlware 1");
//     next();
// }

// const m2=(req,res,next)=>{
//     console.log("running middleware 2");
//     next();
// }

// const m3=(req,res,next)=>{
//     console.log("running middleware 3");
//     next();     // for running the middleware.
// }

// const m4=(req,res,next)=>{
//     console.log("running middleware 4");
//     next();
// }

// running middleware at application level
// app.use(m1);
// app.use(m3);
// app.use(m2);
// app.use(m4);

// what is the use of next in middleware it is the function to run a middleware after another, middleware runs orderwise as it called

// at application level the middleware runs for every request. and in the same order.

// path level middleware
// app.get('/about',m4,(req,res)=>{        // for running the middleware at a specific request
//     res.send("<h2>About page</h2>")
//     console.log("this is about");
// })

// app.get('/',(req,res)=>{
//     res.send("<h1>Node</h1>")
// })

// app.get('/home',(req,res)=>{
//     res.send("<h1>you are in the home</h1>");
// })

// app.listen(4000,()=>{
//     console.log("server started.");
    // m1();
    // m2();
// });

// middleware is a function bw thw request, response


import express from 'express';

const app=express();


let userData=[
    {
        id:1,
        name:"Nitesh",
        address:"delhi"
    },
    {
        id:2,
        name:"Ritik",
        address:"faridabad"
    },
    {
        id:3,
        name:"John",
        address:"usa"
    }
];

app.get('/alluser',(req,res)=>{
    res.send(userData);
})

app.get('/getuserbyId',(req,res)=>{
    // const id = req.query.id;
    const {id} = req.query; // destructure, no need to use dot (.)
    for(let i=0; i<userData.length; i++){
        if(userData[i].id==id){
            return res.send(userData[i]);
        }
    }
    res.send("User not Found");
})

// using params
app.get('/getone/:id',(req,res)=>{
    const {id}= req.params;
    for(let i=0; i<userData.length; i++){
        if(userData[i].id==id){
            return res.send(userData[i]);
        }
    }
    res.send("User not Found");
})

app.listen(3000,()=>{
    console.log("server started");
})

// do this by params and  make it for the bolgg also serach all and search one and also ty to debugger;ete the blog