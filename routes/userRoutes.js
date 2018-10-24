const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ message: 'welcome to user routes', processID: process.pid });
});

userRouter.get('/:id', (req, res) => {
    //get user data
    let userData = {
        id: req.params.id,
        name: "Lahiru"
    }

    res.json({ 
        message: 'requested userID: '+req.params.id, 
        user: userData,
        processID: process.pid 
    });
});

module.exports = userRouter;