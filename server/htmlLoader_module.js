const http = require('http');
const fs = require('fs');

let getFile = () => {
    fs.readFile('./index.html', 'utf-8', function (error, data) {
        if (error) {
            return '<h1>file not found</h1>';
        } else {
            return data;
        }
    });
}

exports.getContent = function () {
    var content;
    // First I want to read the file
    fs.readFile('./index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;

        // Invoke the next step here however you like
        console.log(content);   // Put all of the code here (not the best solution)
        processFile();          // Or put the next step in a function and invoke it
    });

    function processFile() {
        console.log(content);
    }
};