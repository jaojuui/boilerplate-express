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
  let message = "Hello json";

  // ต้องอ่านค่าจาก process.env **ภายใน** route handler!
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});



 module.exports = app;
