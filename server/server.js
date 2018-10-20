var http = require('http');
var dt = require('./dateTime_module');
var eh = require('./eventHandler_module');

const hostname = 'localhost';
const port = 3000;

// create a server object.
// The function passed into the http.createServer() method 
// will be executed when someone tries to access the computer on port.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
});

//server object listens on port
server.listen(port, hostname, () => {
  eh.myEventHander('new');
  eh.handleEvent('myEvent');
  eh.triggerEvent('cust');
  console.log(`Server running at http://${hostname}:${port}/`);
});

