const http = require('http'), // get the http module
    fs = require('fs') // get the file system module

// create a local HTTP server on your computer
// takes optional parameter of a function that will be called every time server gets a request
const server = http.createServer((request, response) => { // creating arrow fxn w/no name
        const cleanURL = request.url.slice(1) // get the url of the request
            // request is made by client trying to access a resource on server
            // in this case, the resource is a file

        // do url.slice(1) to remove the first character of the url which is a forward slash
        switch (cleanURL) {
            case '':
                sendFile('index.html', response);
                break;
            default:
                sendFile(cleanURL, response);
                break;
        }
    })
    .listen(3000)

const sendFile = function(filename, response) {
    fs.readFile(filename, (error, content) => {
        if (error !== null) { // error
            response.end('file not found.')
        } else { // success
            response.end(content, 'utf-8')
        }
    })
}