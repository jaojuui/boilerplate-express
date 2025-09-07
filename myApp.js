let express = require('express');
let app = express();
console.log("Hello World");
pathView = __dirname + '/views/index.html'
pathPublic = __dirname + '/public'


app.get("/", (req, res) => {
  res.sendFile(pathView);
});
app.get("/public", (req, res) => {
  res.sendFile(express.static(pathPublic));
});




























 module.exports = app;
