const path = require('path');
const ruleConfig = require('./webpack.rule');
const plguinsConfig = require('./webpack.plguins');
const glob = require('glob');

let entrys = {};

//多页面生成打包
let files = glob.sync('./src/js/*.ts');
files.forEach((item, i) => {
    var htmlName = item.slice(item.lastIndexOf("/") + 1);
    var name = htmlName.split(".")[0];
    entrys[name] = item;
});

module.exports = {
    entry: entrys,
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: ruleConfig
    },
    plugins: plguinsConfig,
    devServer: {
        proxy: {
            
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        index: 'index.html',
        overlay: true,
        open: true,
        quiet: true
    }
};
