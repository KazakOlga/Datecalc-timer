const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssPlugin.loader, 'css-loader']
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssPlugin({
            filename: '[name].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
}