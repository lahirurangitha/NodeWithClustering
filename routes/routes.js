const express = require('express');
const userRouter = require('./userRoutes.js')
const fileRouter = require('./fileRoutes.js');

// ROUTES FOR  API
const router = express.Router(); // get an instance of the express Router

// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure to the next routes and don't stop here
// });

router.get('/', (req, res) => {
    res.json({ message: 'welcome to main routes' });
});

// REGISTER USER ROUTES which are in <userRoutes.js> file
router.use('/users', userRouter);

router.use('/files', fileRouter);

module.exports = router;

//The module.exports or exports is a special object which is included
//in every JS file in the Node.js application by default. 
//module is a variable that represents current module and exports is
// an object that will be exposed as a module. So, whatever you assign to module.exports or exports, 
//will be exposed as a module.