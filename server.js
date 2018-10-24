
const express    = require('express'); // call express
const bodyParser = require('body-parser');
const app        = express(); // define our app using express
const router = express.Router(); // ROUTES FOR API - get an instance of the express Router


const hostname = 'localhost';
const port = 8000;

// configure app to use bodyParser() -  this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure to the next routes and don't stop here
// });

// test route to make sure everything is working (accessed at GET http://localhost:8000/api)
router.get('/', function(req, res) {
    res.json({ message: 'welcome to api' });   
});

// REGISTER ROUTES - all routes will be prefixed with /api
// app.use('/api', router);
app.use(router);

// START THE SERVER
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });