const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline');

module.exports = withOffline(withCSS(withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
        url: false
    },
    dontAutoRegisterSw: true,
    webpack: (config) => {
        return config
    }
})));