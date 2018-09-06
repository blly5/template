
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtranctTextPlugin = require('extract-text-webpack-plugin');
//CleanWebpackPlugin 删除文件配置

const CleanFile = [
    'dist'
];
const CleanOption = {
    root: `${__dirname}/../`,
    verbose:  true,
    dry:      false 
};

//Webpack 配置

const webpack_Config  = 
    {
    entry: './src/js/index.js', //入口文件 
    output: {       //webpack如何输出
        path: path.resolve(__dirname, '../dist/'), //定位，输出文件的目标路径
        filename: '[name].[chunkhash:10].js'
    },
    module: {       //模块的相关配置
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: [
                  {loader: 'babel-loader',options: { presets: ['env'] }},
                //   {loader: 'eslint-loader'}
              ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/images/[name].[hash:10].[ext]'
                }
            },
            {
                test: /\.less$/, 
                use: [
                  'style-loader',
                  {loader:MiniCssExtractPlugin.loader},
                  {loader:'css-loader', options: { importLoaders: 1, minimize: true} },
                  {loader: 'px2rem-loader',options: { remUni: 75,remPrecision: 8 } },
                  {loader:'less-loader',options:{ strictMath: true, noIeCompat: false} },
                  
                ]
            },
            {
                test:/\.html$/,
                use:[
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [ 
            //插进的引用, 压缩，分离美化
        new MiniCssExtractPlugin({
        　　filename: "css/[name].[chunkhash:10].css",
       　　 chunkFilename: "[id].css"
     　　 }),
        new CleanWebpackPlugin(CleanFile,CleanOption),
        new HtmlWebpackPlugin({  //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
            filename: 'index.html', 
            template: './src/index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/js/lib'),
                to: path.resolve(__dirname, '../dist/js/lib'),
                toType: 'dir',
                force: true
            },
            {
                from: path.resolve(__dirname, '../src/css'),
                to: path.resolve(__dirname, '../dist/css'),
                toType: 'dir',
			    force: true,
                ignore: [ '*.less' ]
            },
            {
                from: path.resolve(__dirname, '../src/images'),
                to: path.resolve(__dirname, '../dist/images'),
                toType: 'dir',
			    force: true
            }
        ]),
        new webpack.NoEmitOnErrorsPlugin()
    ]
  };

module.exports = webpack_Config;

