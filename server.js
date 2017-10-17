// Requiring dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var path = req.url;

  // When we visit different urls, the switch statement call on different functions.
  switch (path) {

    // Depending on the URL we display a different HTML file.
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/workout_log":
      fs.readFile(__dirname + "/workout_log.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/login":
      fs.readFile(__dirname + "/login.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;


    default:
      fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});