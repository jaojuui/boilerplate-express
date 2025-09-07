let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");
pathView = __dirname + '/views/index.html'
pathPublic = __dirname + '/public'


app.get("/", (req, res) => {
  res.sendFile(pathView);
});

app.use('/public', express.static(pathPublic));

app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE=="uppercase"){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
});






















 module.exports = app;
