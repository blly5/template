const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const process = require('process');
//多页面生成打包

let files = glob.sync('./src/*.html');
let _plguins = [];
files.forEach((item,i)=>{
    var htmlName=item.slice(item.lastIndexOf("/")+1);
    var name=htmlName.split(".")[0];
    _plguins.push(
        new HtmlWebpackPlugin({  
            chunks: [`${name}`],
            filename:`${htmlName}`, 
            template: `./src/${name}.html`,
            inject: true
        })
    );
});

module.exports = [
        //插进的引用, 压缩，分离美化
        new MiniCssExtractPlugin({
            filename: "css/[hash].css",
            chunkFilename: "[id].css"
    　　 }),
        //多页面生成打包
        ..._plguins,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
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