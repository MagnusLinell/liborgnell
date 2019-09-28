
const querystring = require('querystring');
const ip = require('ip');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:LPkeEspM1PAiUkMZ@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = (e) => ({ ip: ip.address(), statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error', trace: e } }) });
const methodNotAllowedError = { ip: ip.address(), statusCode: 405, body: JSON.stringify({ code: 405, error: { message: 'Method Not Allowed' } }) };

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return methodNotAllowedError;
    }
    try {
        const params = querystring.parse(event.body);
        const client = await MongoClient.connect(uri);
        const col = client.db(dbName).collection('rates');
        const result = await col.insert([params], { w: 1 });
        client.close();
        return {
            statusCode: 200,
            body: result,
            ip: ip.address(),
        };
    } catch (e) {
        return unknownError(e);
    }
}