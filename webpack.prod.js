
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
				test: /\.(scss|css)$/,

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
						loader: 'sass-loader',

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
		new MiniCssExtractPlugin({ filename: 'style.css' }),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],

	entry: {
		index:'index.js'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'production'
};
