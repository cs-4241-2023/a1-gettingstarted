const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = request.url.slice(1);
  switch( url ) {
    case '':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, url )
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
    if(err === null){
      response.end( content, 'utf-8' )
    }
    else{
      response.end('Error: File Not Found')
    }
     
   })
}
