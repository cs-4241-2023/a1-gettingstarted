// import http library
const http = require("http"),
  // to interact with file system, use fs module
  fs = require("fs"),
  port = 3000;

// original server code
// create server & store in variable
//    needs to:
//       1) create request
//       2) respond
//    accepts request and blank response
//    switch statements look at different files
// not optimal; how to abstract?
// slice to remove '/'; take array or string and slice from index and return result
// const server = http.createServer(function (request, response) {
//    request & response manager
//    switch (request.url.slice(1)) {
//       case "":
//          sendFile(response, "index.html");
//          break;
//       case "index.html":
//          sendFile(response, "index.html");
//          break;
//       case "style.css":
//          sendFile(response, "style.css");
//          break;
//       case "script.js":
//          sendFile(response, "script.js");
//          break;
//       default:
//          simplest response
//          response.end("404 Error: File Not Found");
//    }
// });

const server = http.createServer(function (request, response) {
  const url = request.url.slice(1);
  // request & response manager
  switch (url) {
    case "":
      sendFile(response, "index.html");
      break;
    default:
      sendFile(response, url);
      break;
  }
});

// listen function to run the server
// default port for glitch is 3000 -> .listen(3000)
server.listen(process.env.PORT || port);

// asynchronous to underlying scheduler
const sendFile = function (response, filename) {
  // read file & receive file name
  // define callback function with error function
  fs.readFile(filename, function (err, content) {
    // when response received, tell it content & type
    if (err !== null) {
      response.end("file not found.");
    } else {
      response.end(content, "utf-8");
    }
  });
};
