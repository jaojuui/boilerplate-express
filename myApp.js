
require('dotenv').config()
const bodyParser = require('body-parser');
let express = require('express');
let app = express();

console.log("Hello World");
pathView = __dirname + '/views/index.html'
pathPublic = __dirname + '/public'

app.use(bodyParser.urlencoded({extended: false}));
app.get("/", (req, res) => {
  res.sendFile(pathView);
});

app.use('/public', express.static(pathPublic));
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
app.get("/json", (req, res) => {
 console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.get("/now", (req,res,next)=>{
    req.time=new Date().toString();
    next();
},function(req,res){
    res.json({time: req.time});
});

app.get("/:word/echo",(req,res)=>{
    res.json({echo: req.params.word});
})
app.get("/name",(req,res)=>{
    res.json({name:`${req.query.first} ${req.query.last}`});
})

 module.exports = app;
