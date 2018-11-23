const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static')
    }
};