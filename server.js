var express = require("express"); // import express (which is a function) from node_modules
var app = express(); // express() returns an object that has the functionality to create a server
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/")); // tell express to serve files from the /app folder; __dirname is the current folder

var quotes = [ "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison.",
"No matter where you go, there you are. ",
"If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D" ];

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." }
]; // end jokes

function randomString(array) {
  return array[Math.floor(Math.random() * (array.length))];
} // end randomString

app.get("/joke", function(req, res) {
  res.json(randomString(jokes));
  } // end function
); // end .get

// first parameter of .get is the endpoint, second is a function
app.get("/", function(req, res) { // first parameter of the function is a request, second is response
    res.sendFile("index.html");
  } // end function
); // end .get

// first parameter of .get is the endpoint, second is a function
app.get("/quote", function(req, res) { // first parameter of the function is a request, second is response
    console.log("Someone visited quote");
    res.send(randomString(quotes));
  } // end function
); // end .get

// listen should be the last instruction in server.js
app.listen(port, function() {
    console.log("server started on port " + port);
  } // end function
); // end .listen
