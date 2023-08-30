const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    default:
      response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, "utf-8");
  });
};



document.addEventListener("DOMContentLoaded", function() {
    const box = document.querySelector('.box');
    let isAnimating = false;

    box.addEventListener('click', function() {
        if (!isAnimating) {
            isAnimating = true;
            
            const animationDuration = 1000;
            const targetWidth = 200;
            
            box.style.transition = `width ${animationDuration}ms`;
            box.style.width = `${targetWidth}px`;
            
            setTimeout(() => {
                box.style.transition = '';
                box.style.width = '100px';
                isAnimating = false;
            }, animationDuration);
        }
    });
});
