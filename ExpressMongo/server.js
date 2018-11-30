var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var students = require("./routes/students");

var config = require("./config");

var app = express();

//View engine
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);   // Support master pages
app.set("view engine", "ejs");  // ejs view ejsEngine

//Set static folder
app.use(express.static(path.join(__dirname, "client")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Enable Cors
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", index);
app.use("/api", students);

app.listen(config.port, function(){
  console.log("Server started on port" + config.port)
});
