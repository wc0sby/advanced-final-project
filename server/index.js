// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mon = require("mongoose");

const app = express();
const db = mon.connection

// mon.set("debug", true);
mon.connect(process.env.MDB ? process.env.MDB : console.log("Missing MDB environment variable"))
mon.Promise = global.Promise;
db.on('error',console.error.bind(console, 'connection-error'))
db.once('open',()=>console.log('Connected to DB'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});

app.use(express.static("Public"));
app.use(parser.json());

app.use(require('./routes/UserRoutes'));
app.use(require('./routes/SessionRoutes'));
// app.use(require('./routes/AuthenticationRoutes'));

//Can't reach this until Authenticated
app.use(require('./routes/transactionRouter'))
app.use(require('./routes/cashRouter'))
app.use(require('./routes/budgetRouter'))
app.use(require('./routes/categoryRoutes'))


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
