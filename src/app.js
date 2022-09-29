const express =require("express");
require('./db/conn')
const path =require("path")
const app =express();
const port =process.env.PORT ||8000;

app.set('view engine','hbs')
const pathhbs=path.join(__dirname,"../views");
console.log(pathhbs);

app.set("views",pathhbs)
// routing
// app.get(path ,call back)
app.get("/",(req,res)=>{
    // res.send("hello world I Am Mutha:)")
    res.render("index")
})

// create server
app.listen(port,()=>{
    console.log(`connection sucessfully port at ${port}`);

})