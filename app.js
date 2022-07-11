const express=require("express");


const app=express();

app.get("/",function(res,req){
    res.prependListener("index.html");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})