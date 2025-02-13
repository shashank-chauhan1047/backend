import express from 'express';

const app = express();

let blogs = [
    {
        id: 1,
        title: "Understanding React Hooks",
        author: "Shashank Chauhan",
        date: "2025-02-12",
        // content: "React hooks are functions that let you hook into React state and lifecycle features from function components. The commonly used hooks are useState, useEffect, and useContext. Hooks allow you to manage component state, handle side effects, and access context in a much simpler and cleaner way compared to class components.",
        // tags: ["React", "JavaScript", "Frontend Development"],
    },
    {
        id: 2,
        title: "A Guide to Node.js for Beginners",
        author: "Shashank Chauhan",
        date: "2025-02-11",
        // content: "Node.js is a runtime environment built on Chrome's V8 JavaScript engine. It's used for building scalable and efficient network applications. This blog explores the basics of Node.js, including how to set up a simple server, handle HTTP requests, and use popular modules such as Express.js and fs.",
        // tags: ["Node.js", "Backend Development", "JavaScript"],
    },
    {
        id: 3,
        title: "Mastering MongoDB in 2025",
        author: "Shashank Chauhan",
        date: "2025-02-10",
        // content: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. In this blog, we dive deep into MongoDB, exploring its core features such as collections, documents, indexes, and queries. We'll also cover how to integrate MongoDB with Node.js and how to use it effectively for backend applications.",
        // tags: ["MongoDB", "Database", "Backend Development"],
    },
    {
        id: 4,
        title: "React vs Angular: A Comprehensive Comparison",
        author: "Shashank Chauhan",
        date: "2025-02-09",
        // content: "React and Angular are two of the most popular frontend frameworks. While React is a library focused on UI components, Angular is a full-fledged framework. This blog compares the two in terms of performance, ease of use, learning curve, and community support to help you decide which one suits your needs best.",
        // tags: ["React", "Angular", "Frontend Development"],
    },
    {
        id: 5,
        title: "What is Docker and Why You Should Use It?",
        author: "Shashank Chauhan",
        date: "2025-02-08",
        // content: "Docker is a tool designed to make it easier to create, deploy, and run applications using containers. Containers allow developers to package up an application with all parts it needs, such as libraries and dependencies, and ship it all as one package. This blog explains what Docker is, how it works, and how you can use it to streamline development workflows.",
        // tags: ["Docker", "DevOps", "Containerization"],
    },
];

app.get('/all', (req, res) => {
    res.send(blogs);
})

app.get('/getOneById',(req,res)=>{
    const {id}=req.query;

    for(let i=0; i<blogs.length; i++){
        if(blogs[i].id==id){
            return res.send(blogs[i]);
        }
    }
    res.send("<h1>ID NOT FOUND</h1>");

})

app.get('/addUser',(req,res)=>{
    const {id,title,author,data}= req.query;
    console.log(id," ",title," ",author," ",data);

    let blog={
        id:id,
        title:title,
        author:author,
        data:data,
    }

    blogs.push(blog);

    res.send("user added successfully");
})

app.listen(3000, () => {
    console.log("server started");
})

// delete a user : todo

// we can do all the post, put, delete works with get (YES.)
// why not to use get because cross-scripting , we can show the data in the data and anyone can access this so its better to use post request to hide data



// sending data using post request (why to use)

// if you want to change the state of a server you send the post request
// while starting the server has 2 datas afterwards we add 1 more data so the state change from 2 to 3 and also for deleting, and updating

// data is hidden in the url      (another benefit)

// all the data in the form is send by action="post" and the data can be accessed by "body"
// req.body

// two ways to send, 1> form , 2> fetch, axios


