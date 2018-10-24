const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ message: 'welcome to user routes' });
});

module.exports = userRouter;