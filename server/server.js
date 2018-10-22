const http = require('http');
const dt = require('./dateTime_module');
const fs = require('fs');
// const hl = require('./htmlLoader_module');

const hostname = 'localhost';
const port = 8000;

let count = 0;

let handleRequest = (request, response) => {

  console.log('Request received.'+count++);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  //routing
  let url = request.url;
  if (url === '/about') {
    response.write('<h1>about us page<h1>');
  } else if (url === '/contact') {
    response.write('<h1>contact us page<h1>');
  } else {
    response.write('<h1>process ' + process.pid + ' says hello! <h1>');
    //   fs.readFile('../client/index.html', function (error, html) {
    //     if (error) {

    //       response.writeHead(404);
    //       respone.write('file not found');
    //     } else {
    //       response.write(html);
    //     }
    //     response.end();
    //   });
  }
  response.end();
  console.log('process ' + process.pid + ' says hello!');
  while(true){

  }
}

// create a server object.
// The function passed into the http.createServer() method 
// will be executed when someone tries to access the computer on port.
const server = http.createServer(handleRequest);

//server object listens on port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

