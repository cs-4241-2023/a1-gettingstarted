const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      sendFile( response,'styles.css')
      sendFile(response,'WPI_Seal.jpeg')
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/styles.css':
      sendFile(response, 'styles.css')
     break
    case '/WPI_Seal.jpeg':
     sendFile(response, 'styles.css')
      break;
    default:
      response.end( '404 Error: File Not Found' )
  }
  
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
