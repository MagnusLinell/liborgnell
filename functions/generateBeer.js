const uuid = require('uuid/v4');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:QPpKyTF5phA6GtKn@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = (e) => ({ statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error', trace: e } }) });

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
exports.handler = async (event, context) => {
    try {
        const beerId = uuid();
        const code = uuid();
        const toUrl = encodeURIComponent(`https://www.brewbang.com/rate?code=${code}&beerId=${beerId}`);
        const qr = `${url}${toUrl}`;
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const col = client.db(dbName).collection('beers');
        const result = await col.insertOne({ beerId, qr, code }, { w: 1 });
        client.close();
        return {
            statusCode: 200,
            body: JSON.stringify(result.ops),
        };
    } catch (e) {
        return unknownError(e);
    }
}