var webpack = require('webpack'),
    env = process.env.NODE_ENV,
    path = require('path');

var scripts = path.join(__dirname, 'src'),
    jsxsrc = path.join(scripts, 'components'),
    output = path.join(scripts, 'buildpage');
// webpack相关配置
var webpackConfig = {
    entry: {
        productBox: path.join(jsxsrc + '/productBox.js')
    },
    target: 'node',
    output: {
        // Where to put build results when doing production builds:
        path: output,

        // JS filename you're going to use in HTML
        filename: '[name].js',

        libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
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
        },{ 
            test: /\.json$/,
            loader: "json-loader"
        }]
    }
};

module.exports = webpackConfig;
