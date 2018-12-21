const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });
module.exports = {
    entry: ['webpack/hot/poll?1000','./app.js'],
    output: {
        path: path.resolve(__dirname, 'server_dist'),
        filename: 'server.js'
    },
    target: 'node',
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    externals: nodeModules,
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-2'],
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}