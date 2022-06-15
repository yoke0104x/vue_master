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
            injector: 'append',
            patterns: [path.resolve(__dirname, './src/global.less')]
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                globalVars: {
                    primary: '#fff'
                }
            }
        }
    },
    devServer: {
        proxy: {
            '/dybigs': {
                target: 'http://121.36.46.110:16993',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dybigs/, '/dybigs')
            },
        }
    }

};

