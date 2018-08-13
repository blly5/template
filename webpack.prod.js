const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
 
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.(less|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	plugins: [
		new UglifyJSPlugin(),
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
	entry: `index.js`,
	
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'production'
};
