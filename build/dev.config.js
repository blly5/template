
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

//CleanWebpackPlugin 删除文件配置

const CleanFile = [
    'dist/*.css'
];
const CleanOption = {
    root: `${__dirname}/../`,
    verbose:  true,
    dry:      false 
};

//Webpack 配置

const webpack_Config  = 
    {
    entry: './src/index.js', //入口文件 
    output: {       //webpack如何输出
        path: path.resolve(__dirname, '../dist'), //定位，输出文件的目标路径
        filename: '[name].js'
    },
    module: {       //模块的相关配置
        rules: [  
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              }
            },
            {
                test: /\.less$/, 
                use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  {loader:'css-loader', options: { importLoaders: 1, minimize: true} },
                  {loader:'less-loader',options:{ strictMath: true, noIeCompat: true,} }
                ]
            }
        ]                  
    },
    plugins: [ 
            //插进的引用, 压缩，分离美化
          new MiniCssExtractPlugin({
        　　filename: "[name].[chunkhash:8].css",
       　　 chunkFilename: "[id].css"
     　　 }),
        new CleanWebpackPlugin(CleanFile,CleanOption),
        new HtmlWebpackPlugin({  //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
            filename: 'index.html', 
            template: './src/index.html' 
        })
    ]
  };

module.exports = webpack_Config;

