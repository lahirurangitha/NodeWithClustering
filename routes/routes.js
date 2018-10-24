const express = require('express');

// ROUTES FOR  API
const router = express.Router(); // get an instance of the express Router

// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure to the next routes and don't stop here
// });

router.get('/', function (req, res) {
    res.json({ message: 'welcome to api with routes' });
});

module.exports = router;