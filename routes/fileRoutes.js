const express = require('express');
const fileReaderService = require('../services/fileReaderService.js');

const printRouter = express.Router();

printRouter.get('/', (req, res) => {
    let data = fileReaderService.getContent();
    res.json({
        message: 'welcome to file routes',
        filecontent: data,
        test: 'test'
    });
});

module.exports = printRouter;