var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "babel-polyfill",
        "./app"
    ],
    output: {
        filename: "./build.js"
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: /\.js$/,
            include: __dirname,
            exclude: /node_modules/,
            query: {
                plugins: ["transform-runtime"],
                presets: ["es2015"]
            }
        }],
        noParse: /build.js/
    },
    resolve: {
        extensions: ["", ".js", ".json"]
    }
};
