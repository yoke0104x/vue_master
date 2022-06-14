/*
 *@description:
 * @author wayne
 * @date 2022-06-14 15:54
*/
const path = require('path');
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/global.less')]
        }
    },
};

