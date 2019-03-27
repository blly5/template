const path = require('path');

const ruleConfig = require('./webpack.rule');
const plguinsConfig = require('./webpack.plguins');
module.exports = {
    entry: './src/js/index.js', 
    output: {
        path: path.resolve(__dirname, './dist/'), 
        filename: 'js/[name].[hash].js'
    },
    module:{
        rules:ruleConfig
    },
    plugins:plguinsConfig
};
