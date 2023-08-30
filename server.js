const http = require('http'),
  fs = require('fs'),
  port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break;
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen(process.env.PORT || port)

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    response.end( content, 'utf-8' )
  })
}

/**
//loading and importing in http library
const http = require('http'),
  //need fs module for sending and reading files
  fs = require('fs'),
  port = 3000

//create server. Server needs a request and response for a client. Whenever a server is created, it needs a request and will output a response
const server = http.createServer(function (request, response) {
  //request object contains info like url, etc.
  //response object contains info like error messsages
  const url = request.url.slice(1)
  switch (url) {
    case '':
      sendFile(response, '/index.html')
      break
    default:
      sendFile(response, url);
      break;
  }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    if (err === null) {
      response.end('file not found')
    } else {
      //send content and type of content (utf-8) to response
      response.end(content, 'utf-8')
    }
  })
}*/