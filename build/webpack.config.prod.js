const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            inject: true
        }),
        new CopyWebpackPlugin([{
            from: resolve('content'),
            to: resolve('dist/content'),
            toType: 'dir'
        }])
    ]
};
