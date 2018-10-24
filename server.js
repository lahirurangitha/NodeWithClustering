
const express = require('express'); // call express
const bodyParser = require('body-parser');
const app = express(); // define our app using express
const router = require('./routes/routes.js');

const hostname = 'localhost';
const port = 8000;

// configure app to use bodyParser() -  this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER ROUTES - all routes will be prefixed with /api
// app.use('/api', router);
app.use(router);

// START THE SERVER
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});