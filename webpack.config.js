/**
 * webpack 构建配置
 */

var webpack = require('webpack'),
    path = require('path');

var js_src = path.join(__dirname, './src'),
    js_build = path.join(__dirname, './build');

module.exports = {
    name: 'browser',
    entry: [
        path.join(js_src + '/main.js')
    ],

    output: {
        // Where to put build results when doing production builds:
        path: js_build,

        // JS filename you're going to use in HTML
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'jsx']
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    }
};
