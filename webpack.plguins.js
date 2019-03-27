const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');



module.exports = [
        //插进的引用, 压缩，分离美化
        new MiniCssExtractPlugin({
        　　filename: "css/[hash].css",
        　　 chunkFilename: "[id].css"
        　　 }),
        //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
        new HtmlWebpackPlugin({  
            filename: 'index.html', 
            template: './src/index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/js/lib'),
                to: path.resolve(__dirname, './dist/js/lib'),
                toType: 'dir',
                force: true
            },
            {
                from: path.resolve(__dirname, './src/css'),
                to: path.resolve(__dirname, './dist/css'),
                toType: 'dir',
                force: true,
                ignore: [ '*.less' ]
            },
            {
                from: path.resolve(__dirname, './src/images'),
                to: path.resolve(__dirname, './dist/images'),
                toType: 'dir',
                force: true
            }
        ]),
        new FriendlyErrorsWebpackPlugin()
];