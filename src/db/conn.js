const mongoose =require("mongoose");


//create a database
mongoose.connect('mongodb://localhost:27017/dynamicweb').then(()=>{
    console.log("connection successfull mongodb");
}).catch((error)=>{
    console.log(error);
})