// const express=require("express");


// const app=express();

// app.get("/",function(res,req){
//     res.prependListener("index.html");
// })

// app.listen(3000, function(){
//     console.log("Server is running on port 3000");
// })

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});