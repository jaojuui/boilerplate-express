require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");
pathView = __dirname + '/views/index.html'
pathPublic = __dirname + '/public'


app.get("/", (req, res) => {
  res.sendFile(pathView);
});

app.use('/public', express.static(pathPublic));

app.get("/json", (req, res) => {
 console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.get("/now", (req,res)=>{
    res.json({time: req.time});
})



 module.exports = app;
