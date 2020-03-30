const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./client/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: process.env.NODE_ENV,
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    entry: {
        app: './client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        htmlPlugin
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};