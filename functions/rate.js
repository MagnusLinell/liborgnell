const ip = require('ip');
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: ip.address()
    };
};