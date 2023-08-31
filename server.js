const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = request.url.slice(1);
  switch( url ) {
    case '':
      sendFile('index.html', response); 
      break;
    default:
      sendFile(url, response); 
      break;
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( filename, response ) {
   fs.readFile( filename, function( err, content ) {
      if( err !== null ) {
        response.end( 'file not found.')
      }else{
        response.end( content, 'utf-8' ) 
      }
   })
}
