
const querystring = require('querystring');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:LPkeEspM1PAiUkMZ@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = { statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error' } }) };
const methodNotAllowedError = { statusCode: 405, body: JSON.stringify({ code: 405, error: { message: 'Method Not Allowed' } }) };

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return methodNotAllowedError;
    }
    const params = querystring.parse(event.body);
    MongoClient.connect(uri, (err, client) => {
        if (err) {
            return unknownError;
        }

        const col = client.db(dbName).collection('rates');
        col.insert([params], { w: 1 }, (err, result) => {
            if (err) {
                return unknownError;
            }
            client.close();

            return {
                statusCode: 200,
                body: result
            };
        });
    });
};