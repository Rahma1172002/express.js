//import express from express
const express = require("express");
//app will be the variable (object) containing all the express methods
const app = express();
//creat request linked to routes
app.get("/", (req, res) => {
  res.send("<h1>hello this is a response to the path /</h1>");
});
app.get("/", (req, res) => {
    res.send(" <h1>this is home response </h1>");
  });
//asign the port that the serveur will use
const port = 5000;
// custom middleWare 
let name="saif";
const mdlWAre =(req,res,next)=>{
if (name===saif ){ 
    next();
}
else {res.send("you are not saif");}
};
app.get("/saif",,mdlWare(req,res)=>{
    res.send("<h1>hello saif</h1>");
});
app.listen(port, () => console.log("server is running on port ${port}"));
//express middleware
app.use (express.static("pages"));