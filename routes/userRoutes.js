const express = require('express');

const userRouter = express.Router();

userRouter.get('/', function (req, res) {
    res.json({ message: 'welcome to user routes' });
});

module.exports = userRouter;