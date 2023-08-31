const express = require('express');
const path = require('path');
const http = require('http'),
      fs   = require('fs'),
      port = 3000

const app = express()

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile(request.url.slice(1));
      break;
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}

app.use(express.static(path.join(__dirname, 'public')));