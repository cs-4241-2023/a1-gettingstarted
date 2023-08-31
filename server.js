const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/main_style.css':
      sendFile( response, 'main_style.css')
      break;
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, (error, content) => {
     if( error !== null ) {
       response.end( 'file not found.')
     }else{
       response.end( content, 'utf-8' ) 
     }
  })
}
