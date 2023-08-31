const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      sendFile(response, "style.css");
      sendFile(response, "WPI_Logo.png");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    case "/style.css":
      sendFile(response, "style.css");
      break;
    case "/WPI_Logo.png":
      sendFile(response, "WPI_Logo.png");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Error: File Not Found");
  }
});

server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("500 Internal Server Error");
    } else {
      response.end(content);
    }
  });
};
