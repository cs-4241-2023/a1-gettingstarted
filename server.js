

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
