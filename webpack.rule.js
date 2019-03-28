
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = [
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
    },
    {
        test: /\.ts$/,
        use: "ts-loader"
    }
]
