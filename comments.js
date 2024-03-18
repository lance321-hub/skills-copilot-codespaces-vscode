// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and the http module to create the server.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  if (req.url === '/comments.html') {
    fs.readFile(path.join(__dirname, 'comments.html'), function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end('Error loading comments.html');
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// Path: comments.html
// Create a form
// Create a form in the comments.html file with the following fields: name, email, and comment. The form should use the POST method and send the data to /submit.

<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <form action="/submit" method="post">
      <p>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email">
      </p>
      <p>
        <label for="comment">Comment:</label><br>
        <textarea id="comment" name="comment"></textarea>
      </p>
      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </body>
</html>

// Path: comments.js
// Handle form data
// Modify the server to handle the form data sent by the comments.html file. When the server receives the data, it should log the name, email, and comment to the console.

var http = require('http');
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

http.createServer(function (req, res) {
  if (req.url === '/comments.html') {
    fs.readFile(path.join(__dirname