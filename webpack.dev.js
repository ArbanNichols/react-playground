const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
});
