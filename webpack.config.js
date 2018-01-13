const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'app.js'
    },

    devServer: {
        contentBase: './build',
        hot: true,
        historyApiFallback: true
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: ['react-hot-loader/webpack', 'babel-loader?presets[]=react']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            __CLIENT_ID__: JSON.stringify(process.env.CLIENT_ID || '2t9loNQH90kzJcsFCODdigxfp325aq4z'),
            __REDIRECT_URI__: JSON.stringify(process.env.REDIRECT_URI || 'http://localhost:8080/callback')
        })
    ]
};
