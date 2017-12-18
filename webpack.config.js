var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './client/js'
    ],
    resolve: {
        //modulesDirectories: ['node_modules', 'client/js/src'],
        extensions: ['.es6', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'client.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        })
    ]
};
