
const querystring = require('querystring');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:LPkeEspM1PAiUkMZ@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = (e) => ({ statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error', trace: e } }) });
const methodNotAllowedError = { statusCode: 405, body: JSON.stringify({ code: 405, error: { message: 'Method Not Allowed' } }) };

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
            body: result
        };
    } catch (e) {
        return unknownError(e);
    }
}