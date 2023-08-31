// const http = require('http'),
//       fs   = require('fs'),
//       port = 3000

// const server = http.createServer( function( request,response ) {
//   switch( request.url ) {
//     case '/':
//       sendFile( response, 'index.html' )
//       break
//     case '/index.html':
//       sendFile( response, 'index.html' )
//       break
//     default:
//       response.end( '404 Error: File Not Found!' )
//   }
// })

// server.listen( process.env.PORT || port )

// const sendFile = function( response, filename ) {
//    fs.readFile( filename, function( err, content ) {
//      response.end( content, 'utf-8' )
//    })
// }

// in class 8/28 -----------------------------------------------------------------------

const http = require("http"),
        fs = require("fs")
const server = http.createServer((request, response)=>{
  const url = request.url.slice(1)
    switch (url) {
      case "":
        sendFile("index.html",response);
        break;
      case '/style.css':
        sendFile(response, 'style.css')
        break;
        case '/me.JPG':
          sendFile(response, '/me.JPG')
          break;
      default:
        sendFile(url,response);break;
    }
    // response.end("THis is response.")
  })
.listen(3000);

const sendFile = function (filename, response) {
  fs.readFile (filename, (err, content) => {
    if(err !== null){
      console.log(err)
      response.end('file not founddd')
    }else{
    response.end( content, 'utf-8')
  }})
};

// this one better than one in porject? can pick which one is better i guess
// dont use == in JS 


// from office hours 

// const http = require("http"),
//   fs = require("fs");

// const sendFile = function (filename, response) {
//   fs.readFile(filename, (err, content) => {
//     if (err !== null) {
//       console.log(err);
//       response.end("file not founddd");
//     } else {
//       response.end(content, "utf-8");
//     }
//   });
// };

// const server = http.createServer(function (request, response) {
//   switch (request.url) {
//     case "/":
//       sendFile(response, "index.html");
//       break;
//     case "/index.html":
//       sendFile(response, "index.html");
//       break;
//     case "/styles.css":
//       sendFile(response, "style.css");
//       break;
//     default:
//       response.end("404 Error: File Not Found");
//   }
// });
