const express=require("express");
const path =require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.port||8000;
const { partials } = require("handlebars");
 
const staticpath=path.join(__dirname ,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/views/partial");
app.set('views',template_path);
app.set("view engine","hbs");
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })
app.get("*",(req,res)=>{
    res.render("error");
})



app.listen(port,()=>{

    console.log("hii");
})