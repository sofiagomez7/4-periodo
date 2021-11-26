const express = require("express");

const app = express();

app.listen(3000, () =>{ 
    console.log("server stared (http://localhost:3000/) !");
});

app.get("/",(req,res) => { 
    res.send ("hello world...");
});