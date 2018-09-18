

let baseConfig = require('./build/dev.config');

    baseConfig.devServer={
        contentBase:'dist',
        compress: true,
        port: 1234,
        index: 'index.html',
        overlay: true,
        open: true,
        quiet: true
    };
    
module.exports = baseConfig;

