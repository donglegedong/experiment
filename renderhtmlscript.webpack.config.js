var webpack = require('webpack'),
    env = process.env.NODE_ENV,
    path = require('path');

var scripts = path.join(__dirname, 'src'),
    jsxsrc = path.join(scripts, 'container'),
    output = path.join(scripts, 'buildpage');
// webpack相关配置
var webpackConfig = {
    entry: {
        jdPage: path.join(jsxsrc + '/jd/index.js'),
        cnblogPage: path.join(jsxsrc + '/cnblog/index.js'),
        qqPage: path.join(jsxsrc + '/qq/index.js')
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
