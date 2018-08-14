const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', //入口文件 
  output: {       //webpack如何输出
      path: path.resolve(__dirname, 'dist'), //定位，输出文件的目标路径
      filename: '[name].js'
  },
  module: {       //模块的相关配置
      rules: [  
          {
              test: /\.less$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                  'css-loader',
                  'less-loader'
                  ]
              })
          }
      ]                  
  },
  plugins: [  //插进的引用, 压缩，分离美化
      // new ExtractTextPlugin('[name].css'),  //[name] 默认  也可以自定义name  声明使用
      new HtmlWebpackPlugin({  //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
          filename: 'index.html', //打造单页面运用 最后运行的不是这个
          template: './src/index.html'  //vue-cli放在跟目录下
      })
  ]
}