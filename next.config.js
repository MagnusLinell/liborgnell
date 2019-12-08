const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
        url: false
    },
    webpack: (config) => {
        return config
     }
}));