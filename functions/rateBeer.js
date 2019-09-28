
const querystring = require('querystring');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:QPpKyTF5phA6GtKn@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = (e) => ({ statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error', trace: e } }) });
const methodNotAllowedError = { statusCode: 405, body: JSON.stringify({ code: 405, error: { message: 'Method Not Allowed' } }) };

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return methodNotAllowedError;
    }
    try {
        const params = querystring.parse(event.body);
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const col = client.db(dbName).collection('rates');
        await col.insertOne({
            beerId: params.rate.beerId,
            rate: { overall: params.rate.overall }
        }, { w: 1 });
        client.close();
        return {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200, body: { status: 'OK' } }),
        };
    } catch (e) {
        return unknownError(e);
    }
}