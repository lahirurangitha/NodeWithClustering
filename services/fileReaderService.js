const fs = require('fs');
const path = require("path");


exports.getContent = () => {
    const data = fs.readFileSync(path.resolve(__dirname, "../resources/text.txt"), 'utf-8', (err) => {
        if (err) {
            throw err;
        }
    });
    return data;
};