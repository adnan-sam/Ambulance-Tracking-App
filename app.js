const express=require("express");


const app=express();

app.get("/2ndpg",function(res,req){
  
  $('#verify-otp').hide();
  $('#request-otp').on('click',function(){
    $('#sign-in').hide();
    $('#verify-otp').show();
  });
  $('.fa-chevron-left').on('click',function(){
    $('#sign-in').show();
    $('#verify-otp').hide();
  });
  res.render("2ndpg.html");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})


// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });