const path = require('path');
const ruleConfig = require('./webpack.rule');
const plguinsConfig = require('./webpack.plguins');
const glob = require('glob');

let entrys = {};

//多页面生成打包
let files = glob.sync('./src/js/*.js');
files.forEach((item, i) => {
    var htmlName = item.slice(item.lastIndexOf("/") + 1);
    var name = htmlName.split(".")[0];
    entrys[name] = item;
});

module.exports = {
    entry: entrys,
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: ruleConfig
    },
    plugins: plguinsConfig,
    optimization: {
        splitChunks: {
            minSize: 30,
            cacheGroups: {
                default: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10
                }
            }
        }
    }
};
