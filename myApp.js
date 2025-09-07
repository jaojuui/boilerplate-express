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
  res.json({"message": "Hello json"});
});


























 module.exports = app;
