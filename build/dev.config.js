
const path = require('path');
const webpack = require('webpack');
const compiler = webpack({});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtranctTextPlugin = require('extract-text-webpack-plugin');
const Colors = require('colors');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


//CleanWebpackPlugin

const CleanFile = [
    'dist'
];
const CleanOption = {
    root: `${__dirname}/../ *`,
    verbose:  true,
    dry:      false 
};


//WebpackConfig

const webpack_Config  = 
    {
    entry: './src/js/index.js', 
    output: {
        path: path.resolve(__dirname, '../dist/'), 
        filename: 'js/[name].[hash].js'
    },
    
    module: {     
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: [
                  {loader: 'babel-loader'},
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
                  {loader:MiniCssExtractPlugin.loader,options:{publicPath: '../'}},
                  {loader:'css-loader' },
                  {loader:'less-loader'},
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
        　　filename: "css/[hash].css",
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
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ],
   
  };

module.exports = webpack_Config;

