var express = require("express"); // import express (which is a function) from node_modules
var bodyparser = require("body-parser");
var piglatinify = require("./lib/piglatinify.js");
var jokes = require("./lib/jokes.js");
var quotes = require("./lib/quotes.js");
var cat = require("./lib/cat.js");
var app = express(); // express() returns an object that has the functionality to create a server
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/")); // tell express to serve files from the /app folder; __dirname is the current folder
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// first parameter of .get is the endpoint, second is a function
app.get("/", function(req, res) { // first parameter of the function is a request, second is response
    res.sendFile("index.html");
  } // end function
); // end .get

app.get("/joke", function(req, res) {
  var joke = jokes();
  res.json(joke);
}); // end .get

app.get("/quote", function(req, res) {
  var quote = quotes();
  res.send(quote);
}); // end .get

app.get("/cat", function(req, res) {
  res.json(cat());
}); // end .get

app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = { firstname: firstname, lastname: lastname };
  res.json(piglatined);
});

// listen should be the last instruction in server.js
app.listen(port, function() {
    console.log("server started on port " + port);
  } // end function
); // end .listen
